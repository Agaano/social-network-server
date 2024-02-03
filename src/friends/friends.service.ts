import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { PrismaService } from 'src/prisma.service';

enum friendshipStatus {
  friend,
  application,
  none,
}

@Injectable()
export class FriendsService {
  constructor(private prisma: PrismaService) {}

  async createFriendship(userId: number, friendId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    const friend = await this.prisma.user.findUnique({
      where: { id: friendId },
    });
    if (userId === friendId) {
      return new HttpException('Conflict', 409);
    }
    if (!user || !friend) {
      return new HttpException('Not Found', 404);
    }
    const userFriendship = await this.prisma.friendship.findFirst({
      where: { user: userId, friend: friendId },
    });
    if (!!userFriendship) {
      return new HttpException('Conflict', 409);
    }
    const applicationOfFriend = await this.prisma.friendship.findMany({
      where: { user: friendId, friend: userId, type: 'Application' },
    });
    if (applicationOfFriend.length > 0) {
      console.log(
        'New friendship between ' + user.username + ' and ' + friend.username,
      );
      await this.prisma.friendship.deleteMany({
        where: { user: userId, friend: friendId },
      });
      await this.prisma.friendship.deleteMany({
        where: { user: friendId, friend: userId },
      });
      const userToFriendFriendship = await this.prisma.friendship.create({
        data: {
          user: userId,
          friend: friendId,
          type: 'Friendship',
        },
      });
      const friendToUserFriendship = await this.prisma.friendship.create({
        data: {
          user: friendId,
          friend: userId,
          type: 'Friendship',
        },
      });
      const newRoom = await this.prisma.room.create({
        data: {
          name: `${user.username} ${friend.username}`,
          membership: {
            create: [{ userId: user.id }, { userId: friend.id }],
          },
        },
      });
      return userToFriendFriendship;
    }
    console.log(
      'User ' +
        user.username +
        ' have just send friendship application to ' +
        friend.username,
    );
    const application = await this.prisma.friendship.create({
      data: {
        user: userId,
        friend: friendId,
        type: 'Application',
      },
    });
    return application;
  }

  async getIsFriends(id: number, friendId: number) {
    const userToFriendFriendship = await this.prisma.friendship.findFirst({
      where: { user: id, friend: friendId },
    });
    const friendToUserFriendship = await this.prisma.friendship.findFirst({
      where: { user: friendId, friend: id },
    });
    if (friendToUserFriendship?.type === 'Application') {
      return false;
    }
    return userToFriendFriendship?.type || false;
  }

  async getFriends(id: number) {
    const friendships = await this.prisma.friendship.findMany({
      where: { user: id, type: 'Friendship' },
    });
    const friends = [];
    friendships.length > 0 &&
      (await Promise.allSettled(
        friendships.map(async (friendship) => {
          const friend = await this.prisma.user.findUnique({
            where: { id: friendship.friend },
          });
          friend.password = '';
          friend.service = '';
          friends.push(friend);
        }),
      ));
    return friends;
  }

  async getApplications(id: number) {
    const friendships = await this.prisma.friendship.findMany({
      where: { friend: id, type: 'Application' },
    });
    if (friendships.length === 0) return [];
    const friends = [];
    friendships.length > 0 &&
      (await Promise.allSettled(
        friendships.map(async (friendship) => {
          const friend = await this.prisma.user.findUnique({
            where: { id: friendship.user },
          });
          friend.password = '';
          friend.service = '';
          friends.push(friend);
        }),
      ));
    return friends;
  }

  async deleteFriendship(userId: number, friendId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    const friend = await this.prisma.user.findUnique({
      where: { id: friendId },
    });
    if (!user || !friend) {
      return new HttpException('Not Found', 404);
    }

    const userToFriendfriendships = await this.prisma.friendship.findMany({
      where: { user: userId, friend: friendId },
    });
    const friendToUserFriendship = await this.prisma.friendship.findMany({
      where: { user: friendId, friend: userId },
    });
    if (
      userToFriendfriendships.length === 0 &&
      friendToUserFriendship.length === 0
    ) {
      return new HttpException('Not Found', 404);
    }
    const deletedUserToFriendApplication =
      await this.prisma.friendship.deleteMany({
        where: { user: userId, friend: friendId, type: 'Application' },
      });
    const deletedFriendToUserApplication =
      await this.prisma.friendship.deleteMany({
        where: { user: friendId, friend: userId, type: 'Application' },
      });
    const deletedUserToFriendFriendship =
      await this.prisma.friendship.deleteMany({
        where: { user: userId, friend: friendId, type: 'Friendship' },
      });
    const deletedFriendToUserFriendship =
      await this.prisma.friendship.deleteMany({
        where: { user: friendId, friend: userId, type: 'Friendship' },
      });
    return {
      deletedFriendToUserApplication,
      deletedFriendToUserFriendship,
      deletedUserToFriendApplication,
      deletedUserToFriendFriendship,
    };
  }

  async getAllFriendships() {
    const friendships = await this.prisma.friendship.findMany();
    return friendships;
  }
}
