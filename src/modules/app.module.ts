import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { AppService } from '../services/app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { UsersModule } from './user.module';
import { AuthModule } from './auth.module';
import { ShipmentsModule } from './shipment.module';
import { DeliveryModule } from './delivery.module';
import { MongoModule } from './mongo.module';
import configs from '../config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRoot(configs.mailer),
    SequelizeModule.forRoot(configs.mysqlDb as SequelizeModuleOptions),
    UsersModule,
    DeliveryModule,
    AuthModule,
    ShipmentsModule,
    DeliveryModule,
    MongoModule,
  ],
  providers: [AppService],
})
export class AppModule {}
