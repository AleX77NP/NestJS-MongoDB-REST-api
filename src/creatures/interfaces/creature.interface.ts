import * as mongoose from 'mongoose';

export interface Creature extends mongoose.Document {
    id? : string;
    name: string;
    description? :string
    power: string
}