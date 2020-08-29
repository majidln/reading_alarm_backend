import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {User} from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(username: string, password: string) {
    try {
      const newUser = new this.userModel({
        username,
        password
      });
      const res = await newUser.save();
      return res.id;
    } catch(err) {
      throw err;
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.userModel.findOne({username: username});
  }
}
