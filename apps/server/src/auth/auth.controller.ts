import { Body, Controller, Headers, Post, SetMetadata } from '@nestjs/common';
import AuthService from './auth.service';
import { Public } from 'src/decorators/isPublic.decorator';

@Controller('auth')
export default class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('webhook')
  @Public()
  async webhook(@Body() payload: any, @Headers() headers: any) {
    return this.service.webhook(payload, headers);
  }
}
