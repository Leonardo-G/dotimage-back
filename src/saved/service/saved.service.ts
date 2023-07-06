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

  async getSavedForUser(id: number): Promise<Saved[]> {
    const saved = await this.savedModel.findAll({
      where: {
        user_id: id,
      },
    });

    return saved;
  }

  async deleteById(id: number, user_id): Promise<{ msg: string }> {
    await this.savedModel.destroy({
      where: {
        id,
        user_id,
      },
    });

    return { msg: 'ELIMINADO' };
  }
}
