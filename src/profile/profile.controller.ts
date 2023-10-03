import { Body, Controller, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
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
    async upload(@UploadedFile() file: Express.Multer.File, @Body('id') id: number) {
      
    }
}
