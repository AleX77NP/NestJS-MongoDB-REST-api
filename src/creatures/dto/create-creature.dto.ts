import * as mongoose from 'mongoose';

export class CreateCreatureDto extends mongoose.Document {
    readonly name: string;
    readonly power: string;
    readonly description: string;
}