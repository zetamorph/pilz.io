import { Query, Resolver } from '@nestjs/graphql';

import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {

  constructor(
    private readonly userService: UserService,
  ) {}

  @Query('user')
  async getUser(obj, args, context, info) {
    const { id } = args;
    return await this.userService.findById(id);
  }
}