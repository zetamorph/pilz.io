import { Module } from '@nestjs/common';
import { NestModule, MiddlewaresConsumer } from '@nestjs/common/interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Vote } from './vote.entity';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Vote]),
    ],
    components: [
        VoteService,
    ],
    controllers: [
        VoteController,
    ],
})
export class VoteModule implements NestModule {
  configure(consumer: MiddlewaresConsumer) {

  }
}
