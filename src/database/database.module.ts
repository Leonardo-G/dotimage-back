import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { User } from 'src/users/model/user.model';
import { Saved } from 'src/saved/model/saved.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'dotimages',
      synchronize: true,
      autoLoadModels: true,
      models: [User, Saved],
    }),
  ],
})
export class DatabaseModule {}
