import { Module, RequestMethod } from '@nestjs/common';
import { MushroomController } from './mushroom.controller';
import { NestModule, MiddlewaresConsumer } from '@nestjs/common/interfaces';
import { MulterMiddleware } from '../middleware';
import { MushroomService } from './mushroom.service';
import { MushroomResolver } from './mushroom.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mushroom } from './mushroom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mushroom])],
  components: [
    MushroomService,
    MushroomResolver,
  ],
  controllers: [MushroomController],
})
export class MushroomModule implements NestModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply([MulterMiddleware])
      .with('image', 5, 'mushrooms', 'mushroom')
      .forRoutes({
        path: '/mushrooms',
        method: RequestMethod.POST,
      });
  }
}
