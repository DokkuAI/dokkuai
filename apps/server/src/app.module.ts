import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import UserModule from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import LibraryModule from './library/library.module';
import NotesModule from './notes/notes.module';
import WorkspaceModule from './workspace/workspace.module';
 @Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({ uri: 'mongodb://localhost:27017/dokkuai' }),
    }),
    UserModule,
    NotesModule,
    WorkspaceModule,
    LibraryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
