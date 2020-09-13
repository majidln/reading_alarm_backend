import { Profile } from './profile.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProfileService {
  // private readonly users: User[];

  constructor(@InjectModel('Profile') private profileModel: Model<Profile>) {}

  async update(profile: any, user: string) {

    // try to find current user profile
    const profileCount = await this.profileModel.findOne({user});
    const newProfile = new this.profileModel({
        name: profile.name,
        email: profile.email,
        user: user,
    });
    if (profileCount?.id) {
        // User profile is exist
        const params = {};
        
        const res = await this.profileModel.update({user}, {
            name: profile.name,
            email: profile.email,
        });
        return res.id
    } else {
        // User profile is not exist
        try {
            const res = await newProfile.save();
            return res.id
        } catch(err) {
            throw err;
        }
    }
    
    
  }
}
