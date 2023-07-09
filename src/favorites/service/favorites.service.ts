import { Injectable } from '@nestjs/common';
import { Favorites } from '../model/favorites.model';
import { FavoriteCreateDTO } from '../dto/favorites.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel(Favorites.name) private favoritesModel: Model<Favorites>,
  ) {}

  async newFavorite(
    favoriteCreateDTO: FavoriteCreateDTO,
    user_id: string,
  ): Promise<Favorites> {
    const favorite = new this.favoritesModel({
      user_id,
      ...favoriteCreateDTO,
    });
    await favorite.save();

    return favorite;
  }

  async getAllById(id: string): Promise<Favorites[]> {
    const favorites = await this.favoritesModel.find({
      user_id: id,
    });

    return favorites;
  }

  async deleteById(id: string): Promise<{ msg: string }> {
    await this.favoritesModel.findByIdAndDelete(id);

    return { msg: 'ELIMINADO' };
  }
}
