import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { authData, regData } from './dto/auth.dto'

class confirmCode {
  id: number
  code: string
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async auth(@Body() data: authData) {
    return await this.authService.auth(data);
  }
  @Post('signup') 
  async register(@Body() data: regData) {
    return await this.authService.register(data);
  }
  @Post('validate') 
  async validate(@Body('token') token: string) {
    return await this.authService.validate(token);
  }
  @Post('confirm') 
  async confirm(@Body() {id, code} : confirmCode) {
    return await this.authService.confirmCode(code,id)
  }
}
