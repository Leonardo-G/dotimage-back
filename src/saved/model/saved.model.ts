import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { User } from 'src/users/model/user.model';

@Table
export class Saved extends Model {
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column
  id: string;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  user_id: number;

  @AllowNull(false)
  @Column(DataType.TEXT)
  savedId: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  type: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  urlImage: string;

  @BelongsTo(() => User, 'user_id')
  user: User;
}
