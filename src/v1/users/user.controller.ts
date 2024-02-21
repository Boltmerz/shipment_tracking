import {
  Controller,
  Post,
  ParseIntPipe,
  Patch,
  UseGuards,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { Roles } from '../../roles/roles.decorator';
import { RolesGuard } from '../../guards/roles.guard';
import { UserService } from '../../services/user.service';
import { MailService } from '../../services/mailer.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UserService,
    private readonly mailerService: MailService,
  ) {}

  @Post()
  async createUser(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('name') name: string,
  ): Promise<any> {
    const newUser = await this.userService.signUp({
      email,
      password,
      name,
      id: null,
      archived: false,
    });

    return { message: 'User created successfully', userId: newUser.id };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Patch('enable')
  async updateUserArchivedStatus(
    @Body('id', ParseIntPipe) id: number,
    @Body('archived') archived: boolean,
  ): Promise<any> {
    const updatedUser = await this.userService.updateUserArchivedStatus(
      id,
      archived,
    );

    return {
      message: 'User archived status updated successfully',
      user: updatedUser,
    };
  }
}
