import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DeliveryVehicle } from '../models/delivery_vehicle.model';
import { DeliveryAgent } from '../models/delivery_agent.model';
import { DeliverySchedule } from '../models/delivery_schedule.model';
import { DeliveryVehichleType } from '../models/delivery_vehichle_type';
import { DeliveryController } from '../v1/delivery/delivery.controller';
import { DeliveryService } from '../services/delivery.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      DeliveryVehicle,
      DeliveryAgent,
      DeliverySchedule,
      DeliveryVehichleType,
    ]),
  ],
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}
