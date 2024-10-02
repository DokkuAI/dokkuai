import { Module } from '@nestjs/common';
import ActivityService from './activity.service';
import ActivityController from './activity.controller';
import ActivityRepository from './repository/activity.repository';
import { MongooseModule } from '@nestjs/mongoose';
import Activity, { ActivitySchema } from './schema/activity.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Activity.name, schema: ActivitySchema}])],
  controllers: [ActivityController],
  providers: [ActivityService, ActivityRepository],
})
export class ActivityModule {}
