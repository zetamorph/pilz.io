import { Controller, Get, Post, Req } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Get()
    async find(@Req() req) {
        return await this.userService.findAll();
    }

    @Post()
    async create(@Req() req) {
        const user: User = req.body;
        return await this.userService.create(user);
    }
}