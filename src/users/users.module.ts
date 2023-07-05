import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';
import { User } from './model/user.model';
import { PasswordBcrypt } from './utils/hashPassword';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, PasswordBcrypt],
})
export class UsersModule {}
