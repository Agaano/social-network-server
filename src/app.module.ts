import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppGateway } from './app.gateway'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { FriendsModule } from './friends/friends.module'
import { PostsModule } from './posts/posts.module'
import { PrismaService } from './prisma.service'
import { ProfileModule } from './profile/profile.module'
import { UserModule } from './user/user.module'
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [AuthModule, ProfileModule, UserModule, PostsModule, FriendsModule, RoomsModule],
  controllers: [AppController ],
  providers: [AppService, AppGateway, PrismaService],
})
export class AppModule {}
