import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async findUserByEmail(id: string) {
    const user = this.prisma.user.findFirst({
      where: {OR: [{username: id},{email: id}]}
    })
    return user
  }

  async findUser(id: number) {
    const user = this.prisma.user.findUnique({where: {id: Number(id)}})
    return user;
  }
}
