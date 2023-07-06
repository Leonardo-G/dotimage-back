import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './common/constants/constants';
import { CompareTokenMiddleware } from './common/middleware/compare-token/compare-token.middleware';
import { SavedModule } from './saved/saved.module';
import { SavedController } from './saved/controller/saved.controller';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.PALABRA_SECRET,
      signOptions: {
        expiresIn: '7d',
      },
    }),
    SavedModule,
    FavoritesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CompareTokenMiddleware).forRoutes(SavedController);
  }
}
