import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MongooseModule } from '@nestjs/mongoose';
import Project, { ProjectSchema } from './schema/project.schema';
import ProjectRepository from './repository/project.repository';

@Module({
  imports: [MongooseModule.forFeature([{name: Project.name, schema: ProjectSchema}])],
  controllers: [ProjectController],
  providers: [ProjectService, ProjectRepository],
})
export class ProjectModule {}
