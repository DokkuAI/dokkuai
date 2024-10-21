import { Injectable } from '@nestjs/common';
import { CreateNodeDto } from './dto/create-node.dto';
import { UpdateNodeDto } from './dto/update-node.dto';
import NodeRepository from './repository/node.repository';
import { Types } from 'mongoose';
import Node from './schema/node.shema';

@Injectable()
export class NodeService {
  constructor(private readonly nodeRepository: NodeRepository) {}
  async create(node: Node): Promise<Node> {
    return this.nodeRepository.create(node);
  }

  async findAll(query: { workspaceId: Types.ObjectId }): Promise<Node[]> {
    return await this.nodeRepository.find(query);
  }

  findOne(id: number) {
    return `This action returns a #${id} node`;
  }

  update(id: number, updateNodeDto: UpdateNodeDto) {
    return `This action updates a #${id} node`;
  }

  async remove(id: Types.ObjectId): Promise<null> {
    return await this.nodeRepository.findByIdAndDelete(id);
  }
}
