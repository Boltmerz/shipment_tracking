import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Shipment } from '../models/shipment.model';
import { CreateShipmentDto, UpdatePreferencesDto } from '../dtos/shipment.dto';

@Injectable()
export class ShipmentService {
  constructor(
    @InjectModel(Shipment)
    private readonly shipmentModel: typeof Shipment,
  ) {}

  async create(shipmentData: CreateShipmentDto): Promise<Shipment> {
    return this.shipmentModel.create(shipmentData);
  }

  async findAll(): Promise<Shipment[]> {
    return this.shipmentModel.findAll();
  }

  async findOne(id: number): Promise<Shipment> {
    return this.shipmentModel.findByPk(id);
  }

  async update(id: number, shipmentData: Partial<Shipment>): Promise<[number]> {
    return this.shipmentModel.update(shipmentData, { where: { id } });
  }

  async remove(id: number): Promise<void> {
    const shipment = await this.shipmentModel.findByPk(id);
    await shipment.destroy();
  }
  async updateShipmentStatus(userId: number, id: number): Promise<[number]> {
    const result = await this.shipmentModel.update(
      { status: 'scheduled', userId },
      { where: { id } },
    );

    return result;
  }

  async updatePreferences(
    shipmentId,
    preferencesDto: UpdatePreferencesDto,
  ): Promise<Shipment> {
    const shipment = await this.findOne(shipmentId);

    if (!shipment) {
      throw new NotFoundException(`Shipment with id ${shipmentId} not found`);
    }
    const { deliveryScheduleId, instructions, deliveryVehicleTypeId } =
      preferencesDto;

    if (deliveryScheduleId) {
      shipment.deliveryScheduleId = deliveryScheduleId;
    }

    if (instructions) {
      shipment.instructions = instructions;
    }

    if (deliveryVehicleTypeId) {
      shipment.deliveryVehicleTypeId = deliveryVehicleTypeId;
    }

    return shipment.save();
  }
}
