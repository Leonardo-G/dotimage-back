import { Module } from '@nestjs/common';
import { Saved, SavedSchema } from './model/saved.model';
import { SavedController } from './controller/saved.controller';
import { SavedService } from './service/saved.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Saved.name,
        schema: SavedSchema,
      },
    ]),
  ],
  controllers: [SavedController],
  providers: [SavedService],
})
export class SavedModule {}
