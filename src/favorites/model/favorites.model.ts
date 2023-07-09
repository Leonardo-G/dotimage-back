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
export class Favorites extends Model {
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.INTEGER)
  user_id: number;

  @AllowNull(false)
  @Column(DataType.TEXT)
  favoriteId: string;

  @AllowNull(false)
  @Column(DataType.STRING(10))
  type: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  urlImage: string;
}
