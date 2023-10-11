import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateLobbyInfo } from './dto/create.dto'

@Controller('rooms')
export class RoomsController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async create(@Body() lobby: CreateLobbyInfo) {
    const firstUser = await this.prisma.user.findUnique({where: {id: Number(lobby.user)}})
		const secondUser = await this.prisma.user.findUnique({where: {id: Number(lobby.friend)}})
		if (!firstUser || !secondUser) return;
		const newLobby = await this.prisma.room.create({data: {
			name: firstUser.username + ' ' + secondUser.username,
			membership: {
				create: [
					{userId: firstUser.id},
					{userId: secondUser.id}
				]
			}
		}})
    return newLobby;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const rooms = await this.prisma.room.findMany({
      where:{
        membership: {
          some:{
            userId: Number(id)
          },
        }
      },
    })
    return rooms
  }

  @Post('join') 
  async join(@Body('userId') id: string, @Body('roomId') roomId: string) {
    const newMembership = await this.prisma.membership.create({data: {
      userId: Number(id),
      roomId: Number(roomId),
    }})
    return newMembership;
  }
}
