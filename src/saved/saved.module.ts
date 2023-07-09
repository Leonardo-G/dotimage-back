import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Saved } from './model/saved.model';
import { SavedController } from './controller/saved.controller';
import { SavedService } from './service/saved.service';

@Module({
  // imports: [SequelizeModule.forFeature([Saved])],
  controllers: [SavedController],
  providers: [SavedService],
})
export class SavedModule {}
