import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user.model';
import { CreateUserDto } from '../dtos/user.dto';
import { MailService } from './mailer.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private readonly mailerService: MailService,
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.userModel.create({
      ...createUserDto,
      password: hashedPassword,
    });

    await this.mailerService.sendWelcomeEmail(user.email, user.name);

    return user;
  }

  async updateUserArchivedStatus(
    id: number,
    archived: boolean,
  ): Promise<undefined> {
    await this.userModel.update(
      { archived },
      {
        where: {
          id,
        },
      },
    );
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ where: { email } });
  }
}
