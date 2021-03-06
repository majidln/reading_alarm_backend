import * as mongoose from 'mongoose';

export const AlarmSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true}
})

export interface Alarm {
     id: string;
     title: string;
     description: string;
}