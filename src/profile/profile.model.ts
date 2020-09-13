import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: false},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
})

export interface Profile {
     id: string;
     name: string;
     email: string;
     user: string;
    // TODO add connection to user model 
}