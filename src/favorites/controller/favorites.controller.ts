import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Req,
} from '@nestjs/common';
import { FavoriteCreateDTO } from '../dto/favorites.dto';
import { Request } from 'express';
import { FavoritesService } from '../service/favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {}

  @Post()
  createFavorite(
    @Body() favoriteCreateDTO: FavoriteCreateDTO,
    @Req() req: Request & { id: number },
  ) {
    try {
      return this.favoritesService.newFavorite(favoriteCreateDTO, req.id);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Get()
  getFavorites(@Req() req: Request & { id: number }) {
    try {
      return this.favoritesService.getAllById(req.id);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Delete(':id')
  deleteFavorite(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request & { id: number },
  ) {
    try {
      return this.favoritesService.deleteById(id, req.id);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
