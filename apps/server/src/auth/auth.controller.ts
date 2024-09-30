import { Body, Controller, Headers, Post, SetMetadata } from '@nestjs/common';
import AuthService from './auth.service';

@Controller('auth')
export default class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('webhook')
  @SetMetadata('isExcluded', true)
  async webhook(@Body() payload: any, @Headers() headers: any) {
    return this.service.webhook(payload, headers);
  }
}
