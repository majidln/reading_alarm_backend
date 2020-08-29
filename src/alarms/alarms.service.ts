import { Alarm } from './alarms.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AlarmsService {
  // private readonly users: User[];

  constructor(@InjectModel('Alarm') private alarmModel: Model<Alarm>) {}

  async insert(title: string, desc: string) {
    try {
      const newAlarm = new this.alarmModel({
        title,
        description: desc
      })
      const res = await newAlarm.save();
      return res.id
    } catch(err) {
      throw err;
    }
  }
}
