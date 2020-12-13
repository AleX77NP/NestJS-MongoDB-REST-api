import { CreatureSchema } from './schemas/creature.schema';
import { Module } from '@nestjs/common';
import { CreaturesController } from './creatures.controller';
import { CreaturesService } from './creatures.service';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forFeature([{name: 'Creature', schema: CreatureSchema}])],
  controllers: [CreaturesController],
  providers: [CreaturesService],
})
export class CreaturesModule {}