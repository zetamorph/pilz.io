import { Controller, Post, Req } from '@nestjs/common';
import { Mushroom } from './mushroom.entity';
import { MushroomService } from './mushroom.service';

@Controller('mushrooms')
export class MushroomController {

    constructor(
        private readonly mushroomService: MushroomService,
    ) {}

    @Post()
    async create(@Req() req) {
        const newMushroom: Mushroom = {
            ...req.body,
            imageUrls: req.files.map(file => file.path),
        };

        return await this.mushroomService.create(newMushroom);
    }
}