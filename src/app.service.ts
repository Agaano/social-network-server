import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async search(searchQuery: string) {
    const searchData = await this.prisma.user.findMany({where: {
        username: {contains: searchQuery}
      },
      select: {
        username: true,
        link: true,
        avatar: true,
      }
    })
    return searchData
  }
}
