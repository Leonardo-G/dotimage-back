import { Module } from '@nestjs/common';
import { FavoritesController } from './controller/favorites.controller';
import { FavoritesService } from './service/favorites.service';
import { Favorites, FavoritesSchema } from './model/favorites.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Favorites.name,
        schema: FavoritesSchema,
      },
    ]),
  ],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
