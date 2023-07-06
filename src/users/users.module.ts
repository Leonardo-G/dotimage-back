import {
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';
import { User } from './model/user.model';
import { PasswordBcrypt } from './utils/hashPassword';
import { CompareTokenMiddleware } from 'src/common/middleware/compare-token/compare-token.middleware';
import { FavoritesController } from 'src/favorites/controller/favorites.controller';
import { SavedController } from 'src/saved/controller/saved.controller';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, PasswordBcrypt],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CompareTokenMiddleware)
      .forRoutes(
        { path: 'users/validate-token', method: RequestMethod.POST },
        FavoritesController,
        SavedController,
      );
  }
}
