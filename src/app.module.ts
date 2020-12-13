import { CreaturesModule } from './creatures/creatures.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import config from './config/keys'


@Module({
  imports: [CreaturesModule, MongooseModule.forRoot(config.MONGO_URI), ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
