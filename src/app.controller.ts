import { Controller, Get, Param } from '@nestjs/common'
import { Res } from '@nestjs/common/decorators/http/route-params.decorator'
import { readFileSync } from 'fs'
import { ServerResponse } from 'http'
import { contentType } from 'mime-types'
import uploadDirectory from './uploads/avatars/uploadDirectory'

@Controller()
export class AppController {
  @Get("/files/:fileName")
  async getFile(@Res() response:ServerResponse, @Param("fileName") fileName: string) {
    const contType:string = contentType(fileName).toString();
    const supportedFormats = ['image/png', 'image/jpeg'];
    if (supportedFormats.includes(contType) === false) {
      response.write('Unsupported format');
      response.end();
      return;
    }
    const file = await readFileSync(__dirname + '/uploads/avatars/' + fileName);
    console.log(__dirname + '/uploads/avatars/' + fileName)
    console.log(uploadDirectory() + fileName);
    console.log(__dirname + '/uploads/avatars/' + fileName === uploadDirectory() + fileName);
    response.appendHeader('Content-Type', contType)
    response.write(file);
    response.end();
  }
}
