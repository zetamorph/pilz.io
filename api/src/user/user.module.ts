import { Module } from '@nestjs/common';
import { NestModule, MiddlewaresConsumer } from '@nestjs/common/interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
    components: [
        UserService,
    ],
    controllers: [
        UserController,
    ],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewaresConsumer) {

  }
}
