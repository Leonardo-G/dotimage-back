import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const defaultOptions: SequelizeModuleOptions = {
  dialect: 'mysql',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'dotimages',
  synchronize: true,
};
