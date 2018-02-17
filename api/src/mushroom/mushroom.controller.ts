import { Controller, Get, Post, Req } from '@nestjs/common';
import { Mushroom } from './mushroom.entity';
import { MushroomService } from './mushroom.service';

@Controller('mushrooms')
export class MushroomController {

    constructor(
        private readonly mushroomService: MushroomService,
    ) {}

    @Get()
    async find(@Req() req) {
        return await this.mushroomService.findAll();
    }

    @Post()
    async create(@Req() req) {
        const newMushroom: Mushroom = {
            ...req.body,
            imageUrls: req.files.map(file => file.location),
        };

        return await this.mushroomService.create(newMushroom);
    }
}