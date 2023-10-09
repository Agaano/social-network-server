import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { ProfileModule } from './profile/profile.module'
import { UserModule } from './user/user.module'
import { PostsModule } from './posts/posts.module';
import { FriendsModule } from './friends/friends.module';

@Module({
  imports: [AuthModule, ProfileModule, UserModule, PostsModule, FriendsModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
