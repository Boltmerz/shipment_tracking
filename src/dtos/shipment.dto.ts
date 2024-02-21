import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateShipmentDto {
  @IsNotEmpty()
  @IsString()
  origin: string;

  @IsNotEmpty()
  @IsString()
  destination: string;

  @IsNotEmpty()
  @IsString()
  instructions: string;

  @IsNotEmpty()
  @IsString()
  route: string;

  @IsOptional()
  @IsNumber()
  deliveryAgentId?: number;

  @IsOptional()
  @IsNumber()
  deliveryScheduleId?: number;

  @IsOptional()
  @IsNumber()
  deliveryVehicleTypeId?: number;

  @IsNotEmpty()
  userId: number;
}

export class UpdateShipmentStatusDto {
  @IsNotEmpty()
  userId: number;
  @IsNotEmpty()
  shipmentId: number;
  @IsNotEmpty()
  status: string;
}

export class UpdatePreferencesDto {
  @IsOptional()
  @IsNumber()
  deliveryScheduleId?: number;

  @IsOptional()
  @IsString()
  instructions?: string;

  @IsOptional()
  @IsNumber()
  deliveryVehicleTypeId?: number;
}
