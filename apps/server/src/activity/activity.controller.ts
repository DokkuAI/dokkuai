import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Req,
} from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import Activity from './schema/activity.schema';
import ActivityService from './activity.service';
import { Public } from 'src/decorators/isPublic.decorator';


@Controller('activity')
export default class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  create(@Body() createActivityDto: CreateActivityDto, @Req() request: any): Promise<Activity> {
    return this.activityService.create(createActivityDto, request.user._id);
  }

  @Get(':id')
  @Public()
  async findAll(@Param('id') id: string): Promise<Activity[]> {
    return await this.activityService.findAll(id);
  }

  @Get('/find/:id')
  @Public()
  async find(@Param('id') id: string): Promise<Activity> {
    return await this.activityService.find(id);
  }
}
