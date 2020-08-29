import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlarmsService } from './alarms.service';
import { Alarm, AlarmSchema } from './alarms.model';
import { AlarmsController } from './alarms.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Alarm', schema: AlarmSchema }])],
  providers: [AlarmsService],
  exports: [AlarmsService],
  controllers: [AlarmsController],
})
export class AlarmsModule {}