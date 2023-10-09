import { Body, Controller, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { HttpException } from '@nestjs/common/exceptions'
import { FileInterceptor } from '@nestjs/platform-express'
import { verify } from 'jsonwebtoken'
import { ChangeUsernameDTO } from './dto/changeUsername.dto'
import { ProfileService } from './profile.service'

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Patch('username')
    async changeusername(@Body() data: ChangeUsernameDTO) {
      return this.profileService.changeUsername(data);
    }
  @Post('upload/photo')
  @UseInterceptors(FileInterceptor('file'))
    async upload(@UploadedFile() file: Express.Multer.File, @Body('token') token: string) {
      const idObj = verify(token, 'qwerty');
      if (!idObj) {
        return;
      }
      const {id} = JSON.parse(JSON.stringify(idObj));
      if (file.size > (1000*1000*5)) {
        return new HttpException('Too Large', 400)
      }
      return this.profileService.upload(file,id);
    }
}
