import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from '../dtos/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(loginData: LoginUserDto) {
    const user = await this.validateUser(loginData.email, loginData.password);
    const payload = {
      userId: user.id,
      roles: [user.role],
      name: user.name,
      isActive: !user.archived,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
