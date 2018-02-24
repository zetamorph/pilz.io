import { Controller, Get, Post, Req } from '@nestjs/common';
import { Vote } from './vote.entity';
import { VoteService } from './vote.service';

@Controller('vote')
export class VoteController {
    constructor(
        private readonly voteService: VoteService,
    ) {}

    @Get()
    async find(@Req() req) {
        return await this.voteService.findAll();
    }

    @Post()
    async create(@Req() req) {
        const vote: Vote = req.body;
        return await this.voteService.create(vote);
    }
}