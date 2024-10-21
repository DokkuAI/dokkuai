import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { NodeService } from './node.service';
import { CreateNodeDto } from './dto/create-node.dto';
import { UpdateNodeDto } from './dto/update-node.dto';
import Node from './schema/node.shema';
import { Types } from 'mongoose';

@Controller('node')
export class NodeController {
  constructor(private readonly nodeService: NodeService) {}

  @Post()
  async create(
    @Body() createNodeDto: CreateNodeDto,
    @Req() request: any,
  ): Promise<Node> {
    const node: Node = {
      ...createNodeDto,
      workspaceId: request.user.workspaceId,
    };
    return this.nodeService.create(node);
  }

  @Get()
  async findAll(@Req() request: any) {
    return await this.nodeService.findAll({workspaceId: request.user.workspaceId});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nodeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNodeDto: UpdateNodeDto) {
    return this.nodeService.update(+id, updateNodeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Types.ObjectId) {
    return await this.nodeService.remove(id);
  }
}
