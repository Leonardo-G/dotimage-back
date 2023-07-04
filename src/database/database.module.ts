import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { defaultOptions } from './config/db.config';
import { User } from 'src/users/model/user.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...defaultOptions,
      models: [User],
    }),
  ],
})
export class DatabaseModule {}
