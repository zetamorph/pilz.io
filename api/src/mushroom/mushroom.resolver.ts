import { Query, Resolver } from '@nestjs/graphql';

import { MushroomService } from './mushroom.service';

@Resolver('Mushroom')
export class MushroomResolver {

  constructor(
    private readonly mushroomService: MushroomService,
  ) {}

  @Query('mushroom')
  async getMushroom(obj, args, context, info) {
    const { id } = args;
    return await this.mushroomService.findById(id);
  }

  @Query('mushrooms')
  async getMushrooms(obj, args, context, info) {
    return await this.mushroomService.findAll();
  }

}