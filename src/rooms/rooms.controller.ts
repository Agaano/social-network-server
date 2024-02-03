import { Body, Controller, Post } from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { PrismaService } from 'src/prisma.service';
import { CreateLobbyInfo } from './dto/create.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async create(@Body() lobby: CreateLobbyInfo) {
    const firstUser = await this.prisma.user.findUnique({
      where: { id: Number(lobby.user) },
    });
    const secondUser = await this.prisma.user.findUnique({
      where: { id: Number(lobby.friend) },
    });
    if (!firstUser || !secondUser) return;
    const newLobby = await this.prisma.room.create({
      data: {
        name: firstUser.username + ' ' + secondUser.username,
        membership: {
          create: [{ userId: firstUser.id }, { userId: secondUser.id }],
        },
      },
    });
    return newLobby;
  }

  @Post('getByToken')
  async findOne(@Body('token') token: string) {
    const userToken = verify(token, 'qwerty');
    const id = userToken['id'];
    if (!id) return;
    const rooms = await this.prisma.room.findMany({
      where: {
        membership: {
          some: {
            userId: Number(id),
          },
        },
      },
    });
    return rooms;
  }

  @Post('getMessagesByToken')
  async findMessages(
    @Body('token') token: string,
    @Body('lobby') lobby: string,
    @Body('cursor') cursor?: string,
  ) {
    const userId = JSON.parse(JSON.stringify(verify(token, 'qwerty')))['id'];
    if (!userId) return;
    const isUserInThisRoom = await this.prisma.membership.findFirst({
      where: { roomId: Number(lobby), userId: userId },
    });
    if (!isUserInThisRoom) return;
    if (!!cursor) {
      const messages = await this.prisma.message.findMany({
        where: {
          roomId: Number(lobby),
        },
        include: { user: true },
        cursor: { id: +cursor },
        take: 20,
        orderBy: { date: 'desc' },
      });
      messages.reverse();
      return messages;
    }
    const messages = await this.prisma.message.findMany({
      where: {
        roomId: Number(lobby),
      },
      include: { user: true },
      take: 20,
      orderBy: { date: 'desc' },
    });
    messages.reverse();
    return messages;
  }

  @Post('join')
  async join(@Body('userId') id: string, @Body('roomId') roomId: string) {
    const newMembership = await this.prisma.membership.create({
      data: {
        userId: Number(id),
        roomId: Number(roomId),
      },
    });
    return newMembership;
  }
}
