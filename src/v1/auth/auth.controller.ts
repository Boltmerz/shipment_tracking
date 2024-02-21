import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from '../../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body) {
    return this.authService.login(body);
  }
}
