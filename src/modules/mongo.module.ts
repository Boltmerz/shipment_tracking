import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LiveTrackingSchema } from '../models/live-tracking.schema';
import { MongoService } from '../services/mongo.service';
import configs from '../config';

@Module({
  imports: [
    MongooseModule.forRoot(configs.mongoDb.url),
    MongooseModule.forFeature([
      { name: 'LiveTracking', schema: LiveTrackingSchema },
    ]),
  ],
  providers: [MongoService],
  exports: [MongoService],
})
export class MongoModule {}
