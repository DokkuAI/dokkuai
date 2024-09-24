import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  NestApplicationOptions,
  RequestMethod,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { LoggerService } from './utils/helper/logger.service';

async function bootstrap() {
  const options: NestApplicationOptions = {
    cors: true,
    bufferLogs: true,
  };

  const app = await NestFactory.create(AppModule, options);

  // Custom winston logger
  app.useLogger(app.get(LoggerService));


  // Enable validation for all routes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  // Enable API Versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.setGlobalPrefix('v1', {
    exclude: [
      {
        path: 'health',
        method: RequestMethod.GET,
      },
      {
        path: '/',
        method: RequestMethod.GET,
      },
    ],
  });

  const port = process.env.PORT || 8080;
  await app.listen(port);

  app.get(LoggerService).log('Server started: ', 'App', {
    env: process.env.NODE_ENV,
    port: `${await app.getUrl()}`,
  });
}
bootstrap();
