import { Controller, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post('register')
    async create(@Body('username') username: string, @Body('password') password: string) {
        console.log('register', username, password)
        const registredUserId = await this.userService.create(username, password);
        return registredUserId;
    }
}
