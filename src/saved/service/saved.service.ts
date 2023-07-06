import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Saved } from '../model/saved.model';
import { SavedCreateDTO } from '../dto/saved.dto';

@Injectable()
export class SavedService {
  constructor(@InjectModel(Saved) private savedModel: typeof Saved) {}

  async createSaved(
    savedCreateDTO: SavedCreateDTO,
    id: number,
  ): Promise<Saved> {
    const saved = new this.savedModel({
      user_id: id,
      ...savedCreateDTO,
    });

    await saved.save();

    return saved;
  }
}
