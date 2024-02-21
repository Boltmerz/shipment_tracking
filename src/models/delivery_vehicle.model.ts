import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { DeliveryVehichleType } from './delivery_vehichle_type';

@Table
export class DeliveryVehicle extends Model<DeliveryVehicle> {
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
  model: string;
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  year: string;

  @ForeignKey(() => DeliveryVehichleType)
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  typeId: number;

  @BelongsTo(() => DeliveryVehichleType)
  type: DeliveryVehichleType;
}
