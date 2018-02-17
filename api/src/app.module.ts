import { Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { NestModule, MiddlewaresConsumer } from '@nestjs/common/interfaces';
import { CorsMiddleWare } from './middleware';
import { MushroomModule } from './mushroom/mushroom.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

@Module({
  imports: [
    GraphQLModule,
    MushroomModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [
    AppController,
  ],
  components: [],
})
export class ApplicationModule implements NestModule {

  constructor(
    private readonly graphQlFactory: GraphQLFactory,
  ) {}

  configure(consumer: MiddlewaresConsumer) {

    const typeDefs = this.graphQlFactory.mergeTypesByPaths('./**/*.graphql');
    const schema = this.graphQlFactory.createSchema({ typeDefs });

    consumer
      .apply(CorsMiddleWare)
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      })
      .apply(graphiqlExpress({ endpointURL: '/graphql' }))
      .forRoutes({
        path: '/graphiql',
        method: RequestMethod.GET,
      })
      .apply(graphqlExpress(req => ({ schema, rootValue: req })))
      .forRoutes({
        path: '/graphql',
        method: RequestMethod.ALL,
      });
  }
}
