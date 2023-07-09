import { Favorites } from '../model/favorites.model';
import { FavoriteCreateDTO } from '../dto/favorites.dto';
import { Model } from 'mongoose';
export declare class FavoritesService {
    private favoritesModel;
    constructor(favoritesModel: Model<Favorites>);
    newFavorite(favoriteCreateDTO: FavoriteCreateDTO, user_id: string): Promise<Favorites>;
    getAllById(id: string): Promise<Favorites[]>;
    deleteById(id: string): Promise<{
        msg: string;
    }>;
}
