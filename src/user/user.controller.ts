import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { verify } from 'jsonwebtoken';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService, private prisma: PrismaService) {}
  @Get('/:id')
  async getUser(@Param('id') id: string) {
    const user = !Number(id)
      ? await this.userService.findUserByLink(id)
      : await this.userService.findUser(Number(id));
    if (!user) {
      return new HttpException('Not Found', 404);
    }
    user.password = '';
    return user;
  }

  @Post('/block')
  async blockUser(
    @Body('token') userToken: string,
    @Body('userId') userIdToBlock: number
  ) {
    const decodedToken = verify(userToken, 'qwerty');
    const userId = decodedToken['id'];
    const user = await this.prisma.user.findUnique({where: {id: userId}});
    const userIsAdmin = user.isAdmin;
    if (!userIsAdmin) return new HttpException('You re not admin, so you can not block other users', 400);
    const userToBlock = await this.prisma.user.findUnique({where: {id: +userIdToBlock}})
    if (userToBlock.service['blocked']) return new HttpException('This user already has been blocked', 400);
    const userService = userToBlock.service;
    userService['blocked'] = true;
    await this.prisma.user.update({where: {id: userIdToBlock}, data: {service: userService}})
    return;
  }
  @Post('/unblock')
  async unblockUser(
    @Body('token') userToken: string,
    @Body('userId') userIdToBlock: number
  ) {
    console.log(userToken);
    const decodedToken = verify(userToken, 'qwerty');
    console.log(decodedToken);
    const userId = decodedToken['id'];
    const user = await this.prisma.user.findUnique({where: {id: userId}});
    const userIsAdmin = user.isAdmin;
    if (!userIsAdmin) return new HttpException('You re not admin, so you can not block other users', 400);
    const userToBlock = await this.prisma.user.findUnique({where: {id: +userIdToBlock}})
    if (!userToBlock.service['blocked']) return new HttpException('This user already is not blocked', 400);
    const userService = userToBlock.service;
    userService['blocked'] = false;
    console.log(userService)
    await this.prisma.user.update({where: {id: userIdToBlock}, data: {service: userService}})
    return;
  }

  @Post('/isTheSamePerson')
  getIsTheSamePerson(@Body('id') id: number, @Body('token') token: string) {
    const decodedToken = verify(token, 'qwerty');
    const tokenId = decodedToken['id'];
    return tokenId === id;
  }
}
