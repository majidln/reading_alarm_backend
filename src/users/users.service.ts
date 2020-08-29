import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  // private readonly users: User[];

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createCatDto: CreateUserDto): Promise<User> {
    const createdCat = new this.userModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.userModel.findOne({username: username});
  }
}
