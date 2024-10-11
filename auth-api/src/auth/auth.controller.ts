import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('confirmPassword') confirmPassword: string,
    @Body('email') email?: string,
  ) {
    return this.authService.signup(username, password, confirmPassword, email);
  }

  @Post('login')
  login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.authService.login(username, password);
  }
}
