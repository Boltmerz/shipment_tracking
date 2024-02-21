import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';
import { Shipment } from './shipment.model';
import { User } from './user.model';

@Table({
  tableName: 'feedbacks',
  timestamps: true,
  underscored: true,
})
export class Feedback extends Model<Feedback> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  feedback_id!: number;

  @ForeignKey(() => Shipment)
  @Column(DataType.INTEGER)
  shipment_id!: number;

  @BelongsTo(() => Shipment, { foreignKey: 'shipment_id', as: 'shipment' })
  shipment!: Shipment;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  user_id!: number;

  @BelongsTo(() => User, { foreignKey: 'user_id', as: 'user' })
  user!: User;

  @Column(DataType.INTEGER)
  rating!: number;

  @Column(DataType.STRING)
  comment!: string;

  @Column(DataType.DATE)
  created_at!: Date;

  @Column(DataType.DATE)
  updated_at!: Date;
}
