import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { CourseType, CourseInput } from './types/graphql-types';
import { Course } from './interface/course.interface';
import { v4 as generateUUID } from 'uuid';

@Resolver('Course')
export class CourseResolver {
    constructor(
        private readonly courseService: CourseService,
    ) { }

    @Query(returns => [CourseType])
    async getAllCourses() {
        return await this.courseService.getAllCourse();
    }

    @Mutation(returns => Boolean)
    async createNewCourse(@Args('CourseData') newCourseData: CourseInput) {
        try{
            newCourseData['id'] = generateUUID();
            await this.courseService.addNewCourse(newCourseData);
            return true;
        }catch( error ){
            return false;
        }
    }

}
