import { Resolver, Query, Args, Mutation, ID } from '@nestjs/graphql';
import { CourseService } from './course.service';

@Resolver('Course')
export class CourseResolver {
    constructor(
        private readonly courseService: CourseService,
    ) { }

    @Query(returns => Boolean)
    async getCourses() {
        return await true
    }

}
