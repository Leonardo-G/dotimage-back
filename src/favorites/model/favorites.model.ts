import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from 'src/users/model/user.model';

export type FavoritesDocument = HydratedDocument<Favorites>;

@Schema()
export class Favorites {
  @Prop({
    type: Types.ObjectId,
    ref: 'User',
  })
  user_id: User;

  @Prop({
    type: String,
    required: true,
  })
  favoriteId: string;

  @Prop({
    type: String,
    enum: ['image', 'video', 'gifs', 'sticker'],
    required: true,
  })
  type: string;

  @Prop({
    type: String,
    required: true,
  })
  urlImage: string;
}

export const FavoritesSchema = SchemaFactory.createForClass(Favorites);
