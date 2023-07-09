import { Module } from '@nestjs/common';
import { FavoritesController } from './controller/favorites.controller';
import { FavoritesService } from './service/favorites.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Favorites } from './model/favorites.model';

@Module({
  // imports: [SequelizeModule.forFeature([Favorites])],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
