import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(20),
    defaultValue: '',
  })
  lastname: string;

  @Column({
    type: DataType.STRING(50),
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.TEXT,
    defaultValue: '',
  })
  imageUrl: string;
}
