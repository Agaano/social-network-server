import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { authData, regData } from './dto/auth.dto';

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
}
