import { Controller, Get, Post, Body, Param, Req, Query } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import Activity from './schema/activity.schema';
import ActivityService from './activity.service';
import { Types } from 'mongoose';

@Controller('activity')
export default class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  create(
    @Body() createActivityDto: CreateActivityDto,
    @Req() request: any,
  ): Promise<Activity> {
    return this.activityService.create(createActivityDto, request.user._id);
  }

  @Get(':id')
  async findAll(
    @Param('id') id: string,
    @Query() params: any,
  ): Promise<Activity[]> {
    const offset = +params.offset;

    return await this.activityService.findAll({projectId: id}, offset);
  }

  @Get('/find/:id')
  async find(@Param('id') id: Types.ObjectId): Promise<Activity> {
    return await this.activityService.find(id);
  }
}
