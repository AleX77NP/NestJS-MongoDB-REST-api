import { Body, Injectable } from '@nestjs/common';
import { Creature } from './interfaces/creature.interface'
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'

@Injectable()
export class CreaturesService {
    
    constructor(@InjectModel('Creature') private readonly creatureModel:Model<Creature>){}

    async findAll(): Promise<Creature[]> {
        return await this.creatureModel.find();
    }

    async findOne(id: string): Promise<Creature> {
        return await this.creatureModel.findOne({ _id: id });
    }

    async create(creature: Creature): Promise<Creature> {
        const newCreature = new this.creatureModel(creature);
        return await newCreature.save();
    }

    async delete(id: string): Promise<Creature> {
        return await this.creatureModel.findByIdAndRemove(id);
    }

    async update(id: string, creature: Creature): Promise<Creature> {
        return await this.creatureModel.findByIdAndUpdate(id, creature, {new: true});
    }

}
