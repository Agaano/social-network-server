import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import {authData, regData} from './dto/auth.dto';
import {HttpException} from '@nestjs/common'
import {PrismaService} from '../prisma.service';
import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  private NotFound = new HttpException('Not Found', 404);
  private BadRequest = new HttpException('Bad Request', 400);
  private Unauthorized = new HttpException('Unauthorized', 401);

  private async findUserByEmail(id: string) {
    const user = this.prisma.user.findFirst({
      where: {OR: [{username: id},{email: id}]}
    })
    return user
  }

  private async findUser(id: number) {
    const user = this.prisma.user.findUnique({where: {id: id}})
    return user;
  }

  async auth(data: authData) {
    const user = await this.findUserByEmail(data.id);
    if (!user) {
      throw this.NotFound
    }
    const passwordMatches = await bcrypt.compare(data.password, user.password)
    if (!passwordMatches) {
      throw this.BadRequest
    }
    const token = jwt.sign({id: user.id}, 'qwerty', {expiresIn: '24h'});
    return token;
  }

  async register(data: regData) {
    
  }

  private transformToObject(token) {
    return JSON.parse(JSON.stringify(token))
  }

  async validate(token: string | null) {
    if (!token) {
      throw this.Unauthorized
    }
    try {
      const decodedToken = jwt.verify(token, 'qwerty');
      const objectToken = this.transformToObject(decodedToken);
      const user = await this.findUser(objectToken.id)
      if (!user) {
        throw this.NotFound
      }
      const newToken = jwt.sign({id: user.id}, 'qwerty');
      return {token: newToken, user: user};
    } catch (error) {
        throw error;
    }
  }
}
