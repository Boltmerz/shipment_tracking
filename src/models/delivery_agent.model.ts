import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { DeliveryVehicle } from './delivery_vehicle.model';

@Table
export class DeliveryAgent extends Model<DeliveryAgent> {
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
    unique: true,
  })
  name: string;

  @ForeignKey(() => DeliveryVehicle)
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  vehichleId: number;

  @BelongsTo(() => DeliveryVehicle)
  vehichle: DeliveryVehicle;
}
