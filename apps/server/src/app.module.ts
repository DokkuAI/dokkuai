import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import UserModule from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import LibraryModule from './library/library.module';
import NotesModule from './notes/notes.module';
import WorkspaceModule from './workspace/workspace.module';
import AuthModule from './auth/auth.module';
import UtilsModule from './utils/utils.module';
import { configuration } from './config/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import ValidateGuard from './guard/validate.guard';
import { APP_GUARD } from '@nestjs/core';
import { ActivityModule } from './activity/activity.module';
import { ProjectModule } from './project/project.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/src/config/env/.env.${process.env.NODE_ENV}`,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow<string>('mongoUri'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    NotesModule,
    WorkspaceModule,
    LibraryModule,
    AuthModule,
    UtilsModule,
    ActivityModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService, {provide: APP_GUARD, useClass: ValidateGuard}],
})
export class AppModule {}
