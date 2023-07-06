import { Module } from '@nestjs/common';
import { FavoritesController } from './controller/favorites.controller';
import { ServiceService } from './service/favorites.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Favorites } from './model/favorites.model';

@Module({
  imports: [SequelizeModule.forFeature([Favorites])],
  controllers: [FavoritesController],
  providers: [ServiceService],
})
export class FavoritesModule {}