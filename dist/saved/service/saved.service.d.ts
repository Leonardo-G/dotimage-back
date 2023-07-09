import { Saved } from '../model/saved.model';
import { SavedCreateDTO } from '../dto/saved.dto';
import { Model } from 'mongoose';
export declare class SavedService {
    private savedModel;
    constructor(savedModel: Model<Saved>);
    createSaved(savedCreateDTO: SavedCreateDTO, id: string): Promise<Saved>;
    getSavedForUser(id: string): Promise<Saved[]>;
    deleteById(id: string): Promise<{
        msg: string;
    }>;
}
