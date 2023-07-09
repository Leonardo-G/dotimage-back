import { Request } from 'express';
import { SavedCreateDTO } from 'src/saved/dto/saved.dto';
import { SavedService } from '../service/saved.service';
export declare class SavedController {
    private savedService;
    constructor(savedService: SavedService);
    newSaved(savedCreateDTO: SavedCreateDTO, req: Request & {
        id: string;
    }): Promise<import("../model/saved.model").Saved>;
    getSaved(req: Request & {
        id: string;
    }): Promise<import("../model/saved.model").Saved[]>;
    deleteSaved(id: string): Promise<{
        msg: string;
    }>;
}
