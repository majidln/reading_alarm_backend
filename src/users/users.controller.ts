import { Controller, Body, Post, Get } from '@nestjs/common';
import { User, UserSchema } from './users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    // @Post('register')
    // async create(@Body() createCatDto: CreateUserDto) {
    //     this.userService.create(createCatDto);
    // }
}
