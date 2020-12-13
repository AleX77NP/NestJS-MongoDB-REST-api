import { Creature } from './interfaces/creature.interface';
import { CreaturesService } from './creatures.service';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('creatures')
export class CreaturesController {

    constructor(private readonly creaturesService: CreaturesService) {}

    @Get()
    findAll(): Promise<Creature[]> {
        return this.creaturesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Creature> {
        return this.creaturesService.findOne(id);
    }

    @Post()
    create(@Body() createCreatureDto: CreateCreatureDto): Promise<Creature> {
        return this.creaturesService.create(createCreatureDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Creature> {
        return this.creaturesService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateCreatureDto: CreateCreatureDto): Promise<Creature> {
        return this.creaturesService.update(id, updateCreatureDto);
    }

}