import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from 'src/users/model/user.model';

export type SavedDocument = HydratedDocument<Saved>;

@Schema()
export class Saved {
  @Prop({
    type: Types.ObjectId,
    ref: 'User',
  })
  user_id: User;

  @Prop({
    type: String,
    required: true,
  })
  savedId: string;

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

export const SavedSchema = SchemaFactory.createForClass(Saved);
