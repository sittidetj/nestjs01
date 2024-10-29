import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Api1Module } from './api1/api1.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb+srv://devday:devday@developerday.qjpim.mongodb.net/sittidetje?retryWrites=true&w=majority&appName=DeveloperDay')
    MongooseModule.forRoot(process.env.MONGO_URI),
    Api1Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
