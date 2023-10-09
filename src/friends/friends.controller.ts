import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { FriendsService } from './friends.service'

@Controller('friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @Get()
  async getAllFriendship() {
    return await this.friendsService.getAllFriendships();
  }

  @Get(':id') 
  async getFriends(@Param('id') id: number) {
    return await this.friendsService.getFriends(Number(id))
  }

  @Get('applications/:id')
  async getApplications(@Param('id') id: number) {
    return await this.friendsService.getApplications(+id)
  }

  @Post()
  async createFriendship(@Body('userId') userId: number, @Body('friendId') friendId: number) {
    return await this.friendsService.createFriendship(Number(userId), Number(friendId));
  }

  @Post('delete')
  async deleteFriendship(@Body('userId') userId: number, @Body('friendId') friendId: number) {
    return await this.friendsService.deleteFriendship(Number(userId), Number(friendId))
  }
}
