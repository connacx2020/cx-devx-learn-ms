import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { AppService } from './app.service';
import { Query } from '@nestjs/graphql';

@Resolver('App')
export class AppResolver {
    constructor(private readonly appService: AppService) { }

    @Query(() => String)
    async sayHi() {
        return this.appService.getHello();
    }
}
