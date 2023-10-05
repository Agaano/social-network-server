import { Module } from '@nestjs/common'
import { MailModule } from '../mailer/mail.module'
import { PrismaService } from '../prisma.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
@Module({
  imports: [MailModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
