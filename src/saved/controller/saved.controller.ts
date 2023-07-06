import { Body, Controller, HttpException, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { SavedCreateDTO } from 'src/saved/dto/saved.dto';
import { SavedService } from '../service/saved.service';

@Controller('saved')
export class SavedController {
  constructor(private savedService: SavedService) {}

  @Post()
  newSaved(
    @Body() savedCreateDTO: SavedCreateDTO,
    @Req() req: Request & { id: number },
  ) {
    try {
      return this.savedService.createSaved(savedCreateDTO, req.id);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
