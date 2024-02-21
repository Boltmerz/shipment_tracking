import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class DeliverySchedule extends Model<DeliverySchedule> {
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

  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  StartsAt: string;
  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  EndsAt: string;
}
