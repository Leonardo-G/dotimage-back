import { FavoriteCreateDTO } from '../dto/favorites.dto';
import { Request } from 'express';
import { FavoritesService } from '../service/favorites.service';
export declare class FavoritesController {
    private favoritesService;
    constructor(favoritesService: FavoritesService);
    createFavorite(favoriteCreateDTO: FavoriteCreateDTO, req: Request & {
        id: string;
    }): Promise<import("../model/favorites.model").Favorites>;
    getFavorites(req: Request & {
        id: string;
    }): Promise<import("../model/favorites.model").Favorites[]>;
    deleteFavorite(id: string): Promise<{
        msg: string;
    }>;
}
