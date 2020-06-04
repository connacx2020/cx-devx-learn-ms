import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
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

    @Query(returns => CourseType, {nullable: true} )
    async getCourseById(@Args('CourseId', { type: () => ID }) courseID: string) {
        return await this.courseService.findCourseById(courseID);
    }

    @Query(returns => [CourseType])
    async findCourseWithTitle(@Args('CourseTitle') courseTitle: string) {
        return await this.courseService.findCourseByTitle(courseTitle);
    }

    @Mutation(returns => Boolean)
    async createNewCourse(@Args('CourseData') newCourseData: CourseInput) {
        try{
            newCourseData['id'] = generateUUID();
            newCourseData['likes'] = 0;
            newCourseData['enrolled'] = 0;
            await this.courseService.addNewCourse(newCourseData);
            return true;
        }catch( error ){
            return false;
        }
    }

}
