import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FriendsService } from './friends.service';

@Controller('friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @Get(':id')
  async getFriends(@Param('id') id: string) {
    return await this.friendsService.getFriends(+id);
  }

  @Get('/applications/:id')
  async getApplications(@Param('id') id: string) {
    return await this.friendsService.getApplications(+id);
  }

  @Get(':id/:friendId')
  async getIsFriends(
    @Param('id') id: number,
    @Param('friendId') friendId: number,
  ) {
    return await this.friendsService.getIsFriends(+id, +friendId);
  }

  @Post()
  async createFriendship(
    @Body('userId') userId: number,
    @Body('friendId') friendId: number,
  ) {
    return await this.friendsService.createFriendship(
      Number(userId),
      Number(friendId),
    );
  }

  @Post('delete')
  async deleteFriendship(
    @Body('userId') userId: number,
    @Body('friendId') friendId: number,
  ) {
    return await this.friendsService.deleteFriendship(
      Number(userId),
      Number(friendId),
    );
  }
}
