import { Injectable } from '@nestjs/common';
import { Saved } from '../model/saved.model';
import { SavedCreateDTO } from '../dto/saved.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SavedService {
  constructor(@InjectModel(Saved.name) private savedModel: Model<Saved>) {}

  async createSaved(
    savedCreateDTO: SavedCreateDTO,
    id: string,
  ): Promise<Saved> {
    const saved = new this.savedModel({
      ...savedCreateDTO,
      user_id: id,
    });
    await saved.save();

    return saved;
  }

  async getSavedForUser(id: string): Promise<Saved[]> {
    const saved = await this.savedModel.find({ user_id: id });

    return saved;
  }

  async deleteById(id: string): Promise<{ msg: string }> {
    await this.savedModel.findByIdAndDelete(id);

    return { msg: 'ELIMINADO' };
  }
}
