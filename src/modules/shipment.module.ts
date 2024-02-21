import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShipmentController } from '../v1/shipments/shipment.controller';
import { ShipmentService } from '../services/shipment.service';
import { Shipment } from '../models/shipment.model';
import { MongoModule } from './mongo.module';

@Module({
  imports: [MongoModule, SequelizeModule.forFeature([Shipment])],
  controllers: [ShipmentController],
  providers: [ShipmentService],
  exports: [ShipmentService],
})
export class ShipmentsModule {}
