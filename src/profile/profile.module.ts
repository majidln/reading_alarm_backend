import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileService } from './profile.service';
import { ProfileSchema } from './profile.model';
import { ProfileController } from './profile.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Profile', schema: ProfileSchema }])],
  providers: [ProfileService],
  exports: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}