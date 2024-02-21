import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class DeliveryVehichleType extends Model<DeliveryVehichleType> {
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
  description: string;
}
