import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Favorites } from '../model/favorites.model';
import { FavoriteCreateDTO } from '../dto/favorites.dto';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel(Favorites) private favoritesModel: typeof Favorites,
  ) {}

  async newFavorite(
    favoriteCreateDTO: FavoriteCreateDTO,
    user_id: number,
  ): Promise<Favorites> {
    const favorite = new this.favoritesModel({
      user_id,
      ...favoriteCreateDTO,
    });
    await favorite.save();

    return favorite;
  }

  async getAllById(id: number): Promise<Favorites[]> {
    const favorites = await this.favoritesModel.findAll({
      where: {
        user_id: id,
      },
    });

    return favorites;
  }

  async deleteById(id: number, id_user: number): Promise<{ msg: string }> {
    await this.favoritesModel.destroy({
      where: {
        id,
        id_user,
      },
    });

    return { msg: 'ELIMINADO' };
  }
}
