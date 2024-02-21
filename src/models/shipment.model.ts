import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { DeliveryAgent } from './delivery_agent.model';
import { DeliverySchedule } from './delivery_schedule.model';
import { DeliveryVehichleType } from './delivery_vehichle_type';
import { User } from './user.model';

@Table
export class Shipment extends Model<Shipment> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  origin: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  destination: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  instructions: string;

  @Column({
    type: DataType.ENUM(
      ...['PENDING', 'SCHEDULED', 'IN_TRANSIT', 'DELIVERED', 'CANCELLED'],
    ),
    allowNull: true,
  })
  status: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  route: string;

  @ForeignKey(() => DeliveryAgent)
  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  deliveryAgentId: number;

  @ForeignKey(() => DeliverySchedule)
  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  deliveryScheduleId: number;

  @BelongsTo(() => DeliverySchedule)
  schedule: DeliverySchedule;

  @ForeignKey(() => DeliveryVehichleType)
  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  deliveryVehicleTypeId: number;

  @BelongsTo(() => DeliveryVehichleType)
  vehichleType: DeliveryVehichleType;

  @ForeignKey(() => User)
  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
