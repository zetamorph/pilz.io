import { Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { NestModule, MiddlewaresConsumer } from '@nestjs/common/interfaces';
import { CorsMiddleWare } from './middleware';
import { MushroomModule } from './mushroom/mushroom.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MushroomModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [
    AppController,
  ],
  components: [],
})
export class ApplicationModule implements NestModule {

  configure(consumer: MiddlewaresConsumer) {
    consumer.apply([CorsMiddleWare]).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
