import { PickType } from '@nestjs/mapped-types';
import { IsIn, IsNotEmpty } from 'class-validator';

export class SavedCreateDTO {
  @IsNotEmpty()
  savedId: string;

  @IsNotEmpty()
  @IsIn(['image', 'video', 'gifs', 'sticker'])
  type: 'image' | 'video' | 'gifs' | 'sticker';

  @IsNotEmpty()
  urlImage: string;
}
