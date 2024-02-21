import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ShipmentService } from '../../services/shipment.service';
import { Shipment } from '../../models/shipment.model';
import { MongoService } from '../../services/mongo.service';
import {
  UpdatePreferencesDto,
  UpdateShipmentStatusDto,
  CreateShipmentDto,
} from '../../dtos/shipment.dto';

@Controller('shipments')
export class ShipmentController {
  constructor(
    private readonly shipmentService: ShipmentService,
    private readonly mongoService: MongoService,
  ) {}

  @Post()
  create(@Body() shipmentData: CreateShipmentDto): Promise<Shipment> {
    console.log(shipmentData);
    return this.shipmentService.create(shipmentData);
  }

  @Get()
  findAll(): Promise<Shipment[]> {
    return this.shipmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Shipment> {
    return this.shipmentService.findOne(+id);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() shipmentData: Partial<Shipment>,
  ): Promise<[number]> {
    return this.shipmentService.update(+id, shipmentData);
  }
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.shipmentService.remove(+id);
  }
  @Put(':id/update')
  updateShipmentStatus(
    @Param('id') id: string,
    @Body() { userId }: UpdateShipmentStatusDto,
  ): Promise<[number]> {
    return this.shipmentService.updateShipmentStatus(userId, +id);
  }

  @Put(':id/update_preferences')
  async updatePreferences(
    @Param('id') id: number,
    @Body() preferencesDto: UpdatePreferencesDto,
  ): Promise<Shipment> {
    return this.shipmentService.updatePreferences(id, preferencesDto);
  }

  @Post(':id/live_tracking')
  async insertLiveTracking(
    @Param('id') shipmentId: string,
    @Body() { location }: { location: string },
  ): Promise<any> {
    const liveTracking = await this.mongoService.insertLiveTracking(
      +shipmentId,
      [location],
    );
    return liveTracking;
  }

  @Get(':id/live_tracking')
  async getShipmentLocation(@Param('id') shipmentId: string): Promise<any> {
    return this.mongoService.getLastLocationByShipmentId(+shipmentId);
  }
}
