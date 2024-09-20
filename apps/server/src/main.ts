import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Admin } from '@repo/types';

async function bootstrap() {
  const obj: Admin = { a: 'a'};
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
