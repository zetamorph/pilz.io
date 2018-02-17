import { Module } from '@nestjs/common';
import { NestModule, MiddlewaresConsumer } from '@nestjs/common/interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
    components: [
        UserService,
        UserResolver,
    ],
    controllers: [],
})
export class Usermodule implements NestModule {
  configure(consumer: MiddlewaresConsumer) {

  }
}
