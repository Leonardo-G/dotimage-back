import {
  AllowNull,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

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
}
