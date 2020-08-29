import { Controller, Body, Post, Get } from '@nestjs/common';
import { AlarmsService } from './alarms.service';

@Controller('alarms')
export class AlarmsController {
    constructor(private alarmsService: AlarmsService) {}

    @Get()
    async getAlarms() {
        // todo
        return 'all alarms 2'
    }

    @Post()
    async createAlarm(@Body('title') title: string, @Body('description') desc: string) {
        console.log('params', title, desc)
        const generatedId = await this.alarmsService.insert(title, desc);
        return {id: generatedId}
    }
}
