import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DeliveryVehicle } from '../models/delivery_vehicle.model';
import { DeliveryAgent } from '../models/delivery_agent.model';
import { DeliverySchedule } from '../models/delivery_schedule.model';
import { DeliveryVehichleType } from '../models/delivery_vehichle_type';
import { AgentListQueryDto } from '../dtos/agents.dto';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectModel(DeliveryVehicle)
    private readonly deliveryVehicle: typeof DeliveryVehicle,
    @InjectModel(DeliveryAgent)
    private readonly deliveryAgent: typeof DeliveryAgent,
    @InjectModel(DeliverySchedule)
    private readonly deliverySchedule: typeof DeliverySchedule,
    @InjectModel(DeliveryVehichleType)
    private readonly deliveryVehichleType: typeof DeliveryVehichleType,
  ) {}

  async agentsList(queryDto: AgentListQueryDto): Promise<DeliveryAgent[]> {
    const agent = await this.deliveryAgent.findAll({
      limit: queryDto.limit,
      offset: queryDto.offset,
    });
    return agent;
  }
}
