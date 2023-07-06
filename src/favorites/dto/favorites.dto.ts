import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class FavoriteCreateDTO {
  @IsNotEmpty()
  @IsString()
  favoriteId: string;

  @IsIn(['image', 'videos', 'gifs', 'sticker'])
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  urlImage: string;
}
