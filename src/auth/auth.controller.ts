import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authData, regData } from './dto/auth.dto';

class confirmCode {
  id: number;
  code: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async auth(@Body() data: authData) {
    const { token } = await this.authService.auth(data);
    return token;
  }

  @Post('signup')
  async register(@Body() data: regData) {
    return await this.authService.register(data);
  }

  @Post('validate')
  async validate(@Body('token') token: string) {
    const data = await this.authService.validate(token);
    return data;
  }

  @Post('confirm')
  async confirm(@Body() { id, code }: confirmCode) {
    return await this.authService.confirmCode(code, id);
  }

  @Post('forgotPassword')
  async forgot(@Body("email") email: string) {
    return await this.authService.forgotPassword(email);
  }

  @Post('changePassword')
  async changePassword(
    @Body('password') newPassword: string, 
    @Body('userId') userId: string
  ) {
    return await this.authService.changePassword(newPassword, userId);
  }
}
