import {
  Module,
  RequestMethod,
  NestModule,
  MiddlewaresConsumer,
} from '@nestjs/common';
import {
  TypeOrmModule,
} from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { CorsMiddleWare } from '../middleware';
import { MushroomModule } from '../mushroom/mushroom.module';
import { UserModule } from '../user/user.module';
import { VoteModule } from '../votes/vote.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    MushroomModule,
    UserModule,
    VoteModule,
  ],
  controllers: [
    AppController,
  ],
  components: [],
})
export class ApplicationModule implements NestModule {

  constructor() {}

  configure(consumer: MiddlewaresConsumer) {

    consumer
      .apply(CorsMiddleWare)
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      });
  }
}
