import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from '../v1/users/user.controller';
import { UserService } from '../services/user.service';
import { MailModule } from './mailer.module';
import { User } from '../models/user.model';

@Module({
  imports: [MailModule, SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
