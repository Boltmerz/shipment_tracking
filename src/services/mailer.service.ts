import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendWelcomeEmail(email: string, name: string) {
    await this.mailerService.sendMail({
      to: email,
      from: 'daoud_boulad@hotmail.com',
      subject: 'Testing Nest Mailermodule with template ✔',
      template: `${process.env.PWD}/src/templates/welcome`,
      context: {
        name,
      },
    });
  }
}
