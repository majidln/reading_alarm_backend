import { Controller, Put, Request, UseGuards, Body } from '@nestjs/common';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {}

    @UseGuards(JwtAuthGuard)
    @Put()
    updateProfile(@Request() req) {
        return this.profileService.update(req.body, req.user.id);
    }
}
