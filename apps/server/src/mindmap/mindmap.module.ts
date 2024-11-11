import { Module } from '@nestjs/common';
import { MindmapService } from './mindmap.service';
import { MindmapController } from './mindmap.controller';
import { MindmapRepository } from './repository/mindmap.repository';
import { MongooseModule } from '@nestjs/mongoose';
import Mindmap, { MindmapSchema } from './schema/mindmap.schema';
import UtilsModule from 'src/utils/utils.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mindmap.name, schema: MindmapSchema }]),
    UtilsModule,
  ],
  controllers: [MindmapController],
  providers: [MindmapService, MindmapRepository],
})
export class MindmapModule {}
