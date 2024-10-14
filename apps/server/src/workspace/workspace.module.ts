import { Module } from '@nestjs/common';
import WorkspaceService from './workspace.service';
import WorkspaceController from './workspace.controller';
import WorkspaceRepository from './repository/workspace.repository';
import { MongooseModule } from '@nestjs/mongoose';
import Workspace, { WorkspaceSchema } from './schema/workspace.schema';
import UserModule from 'src/user/user.module';

@Module({
  imports:[MongooseModule.forFeature([{name: Workspace.name, schema: WorkspaceSchema}]), UserModule],
  controllers: [WorkspaceController],
  providers: [WorkspaceService, WorkspaceRepository],
})
export default class WorkspaceModule {}
