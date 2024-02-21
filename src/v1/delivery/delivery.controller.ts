import { Controller, Query, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { Roles } from '../../roles/roles.decorator';
import { RolesGuard } from '../../guards/roles.guard';
import { DeliveryService } from '../../services/delivery.service';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('/agents')
  getAgents(@Query() query) {
    const { page = 0, pageSize = 0 } = query;
    return this.deliveryService.agentsList({
      limit: pageSize,
      offset: page * pageSize,
    });
  }
}
