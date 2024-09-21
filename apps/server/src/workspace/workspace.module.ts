import { Module } from '@nestjs/common';
import WorkspaceService from './workspace.service';
import WorkspaceController from './workspace.controller';
import WorkspaceRepository from './repository/workspace.repository';
import { MongooseModule } from '@nestjs/mongoose';
import Workspace, { WorkspaceSchema } from './schema/workspace.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Workspace.name, schema: WorkspaceSchema}])],
  controllers: [WorkspaceController],
  providers: [WorkspaceService, WorkspaceRepository],
})
export class WorkspaceModule {}
