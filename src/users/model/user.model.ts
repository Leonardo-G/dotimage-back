import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Favorites } from 'src/favorites/model/favorites.model';
import { Saved } from 'src/saved/model/saved.model';

@Table
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(20),
  })
  name: string;

  @Default('')
  @Column({
    type: DataType.STRING(20),
  })
  lastname: string;

  @AllowNull(false)
  @Unique(true)
  @Column({
    type: DataType.STRING(50),
  })
  email: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(50),
  })
  password: string;

  @Default('')
  @Column({
    type: DataType.TEXT,
  })
  imageUrl: string;

  @HasMany(() => Saved)
  saved: Saved[];

  @HasMany(() => Favorites)
  favorites: Favorites[];
}
