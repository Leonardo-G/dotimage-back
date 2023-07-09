import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Req,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { SavedCreateDTO } from 'src/saved/dto/saved.dto';
import { SavedService } from '../service/saved.service';
import { ValidateMongoIdPipe } from '../pipe/validate-mongo-id.pipe';

@Controller('saved')
export class SavedController {
  constructor(private savedService: SavedService) {}

  @Post()
  newSaved(
    @Body() savedCreateDTO: SavedCreateDTO,
    @Req() req: Request & { id: string },
  ) {
    try {
      return this.savedService.createSaved(savedCreateDTO, req.id);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Get()
  getSaved(@Req() req: Request & { id: string }) {
    try {
      return this.savedService.getSavedForUser(req.id);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Delete(':id')
  deleteSaved(@Param('id', ValidateMongoIdPipe) id: string) {
    try {
      return this.savedService.deleteById(id);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
