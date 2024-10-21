import { Module } from '@nestjs/common';
import { NodeService } from './node.service';
import { NodeController } from './node.controller';

@Module({
  controllers: [NodeController],
  providers: [NodeService],
})
export class NodeModule {}
