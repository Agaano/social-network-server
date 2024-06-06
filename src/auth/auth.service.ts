import { HttpException, Injectable } from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import codeGenerator from '../lib/codeGenerator';
import { MailService } from '../mailer/mail.service';
import { PrismaService } from '../prisma.service';
import { authData, regData } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private mailer: MailService,
  ) {}
  private NotFound = new HttpException('Not Found', 404);
  private BadRequest = new HttpException('Bad Request', 400);
  private Unauthorized = new HttpException('Unauthorized', 401);
  private Conflict = new HttpException('Conflict', 409);
  private InternalError = new HttpException('Internal Server Error', 500);
  private Success = new HttpException('Success', 200);
  private Forbidden = new HttpException('Permission Denied', 403);

  private async createUser(userData: regData) {
    userData.password = await hash(userData.password, 10);
    const randomCode = codeGenerator(10);
    const hashedRandomCode = await hash(randomCode, 10);
    const isExistWithSameLink = await this.prisma.user.findMany({
      where: {
        OR: [
          { username: userData.username },
          { link: userData.username.trim().toLowerCase() },
        ],
      },
    });
    if (isExistWithSameLink.length > 0) {
      return this.Conflict;
    }
    const user = await this.prisma.user.create({
      data: {
        username: userData.username,
        password: userData.password,
        email: userData.email,
        link: userData.username.trim().toLowerCase(),
        service: {
          confirmed: false,
          confirmCode: hashedRandomCode,
        },
        avatar: '/files/no_avatar.png',
      },
    });
    const mail = await this.mailer.sendEmail(
      userData.email,
      'Code Confirm',
      randomCode,
    );
    return user;
  }

  private async findUserByEmail(id: string) {
    const user = this.prisma.user.findFirst({
      where: { OR: [{ username: id }, { email: id }] },
    });
    return user;
  }

  private async findUser(id: number) {
    const user = this.prisma.user.findUnique({ where: { id: id } });
    return user;
  }

  async auth(data: authData) {
    const user = await this.findUserByEmail(data.id);
    if (!user) {
      throw this.NotFound;
    }
    const passwordMatches = await compare(data.password, user.password);
    if (!passwordMatches) {
      throw this.BadRequest;
    }
    if (user.service['confirmed'] === false) {
      return {
        id: user.id,
        email: user.email,
      };
    }
    if (user.service['blocked']) {
      throw new HttpException("User has been blocked", 451);
    }
    const token = jwt.sign({ id: user.id }, 'qwerty', { expiresIn: '24h' });
    return { token };
  }

  async register(data: regData) {
    const userByEmail = await this.findUserByEmail(data.email);
    const userByUsername = await this.findUserByEmail(data.username);
    if (!(!userByEmail && !userByUsername)) {
      throw this.Conflict;
    }
    const user = await this.createUser(data);
    if (!user) {
      return this.InternalError;
    }
    return user;
  }

  async forgotPassword(email: string) {
    const user = await this.findUserByEmail(email);
    if (!user) return this.NotFound;
    const randomCode = codeGenerator(10)
    this.mailer.sendEmail(user.email, "Password Change", randomCode)
    return randomCode;
  }

  async confirmCode(code: string, id: number) {
    const user = await this.findUser(Number(id));
    if (!user || user === null) {
      return this.NotFound;
    }
    if (user.service['confirmed'] === true) {
      return new HttpException('Is already confirmed', 400);
    }
    const compareCodes = await compare(code, user.service['confirmCode']);
    if (compareCodes) {
      await this.prisma.user.update({
        where: { id: user.id },
        data: { service: { confirmed: true } },
      });
      return this.Success;
    } else {
      return this.BadRequest;
    }
  }

  async changePassword(newPassword: string, userId: string) {
    const hashedPassword = await hash(newPassword, 10)
    const user = await this.findUserByEmail(userId);
    if (!user) return this.NotFound
    await this.prisma.user.update({where: {id: user.id}, data: {password: hashedPassword}})
  }

  private transformToObject(token) {
    return JSON.parse(JSON.stringify(token));
  }

  async validate(token: string | null) {
    if (!token) {
      throw this.Unauthorized;
    }
    try {
      const decodedToken = jwt.verify(token, 'qwerty');
      const objectToken = this.transformToObject(decodedToken);
      const user = await this.findUser(objectToken.id);
      if (!user) {
        throw this.NotFound;
      }
      if (user.service['blocked']) {
        return new HttpException("User has been blocked", 451);
      }
      return { user, token };
    } catch (error) {
      return error;
    }
  }
}
