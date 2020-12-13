import * as mongoose from 'mongoose'

export const CreatureSchema = new mongoose.Schema({
    name: String,
    power: String,
    description: String
});