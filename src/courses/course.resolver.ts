import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { CourseType, CourseInput, EnrollInput } from './types/graphql-types';
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

    @Query(returns => CourseType, { nullable: true })
    async getCourseById(@Args('courseId', { type: () => ID }) courseID: string) {
        return await this.courseService.findCourseById(courseID);
    }

    @Query(returns => [CourseType])
    async findCourseWithTitle(@Args('courseTitle') courseTitle: string) {
        return await this.courseService.findCourseByTitle(courseTitle);
    }

    @Query(returns => [CourseType], { nullable: true })
    async getCoursesByAuthorId(@Args('authorID', { type: () => ID }) authorID: string) {
        return await this.courseService.findCoursesByInstructorId(authorID);
    }

    @Mutation(returns => Boolean)
    async createNewCourse(@Args('courseData') newCourseData: CourseInput) {
        try {
            newCourseData['id'] = generateUUID();
            newCourseData['rating'] = parseFloat((Math.random()* (5-3)+3).toFixed(1));
            newCourseData['enrolled'] = 0;
            await this.courseService.addNewCourse(newCourseData);
            return true;
        } catch (error) {
            return false;
        }
    }

    @Query(returns => Boolean)
    async checkUserIsEnrolled(@Args('enrollData') newEnrollData: EnrollInput) {
        try {
            const isEnroll = await this.courseService.checkUserIsEnrolled(newEnrollData)
            return isEnroll;
        } catch (error) {
            return false;
        }
    }

    @Mutation(returns => Boolean)
    async enrollCourse(@Args('enrollData') newEnrollData: EnrollInput) {
        try {
            const isEnroll = await this.courseService.enrollCourse(newEnrollData);
            if (isEnroll) {
                return true;
            }
            return false;

        } catch (error) {
            return false;
        }
    }

    @Mutation(returns => Boolean)
    async unenrollCourse(@Args('enrollData') newEnrollData: EnrollInput) {
        const isEnroll = await this.courseService.unenrollCourse(newEnrollData);
        try {
            if (isEnroll) {
                return true;
            }
            return false;

        } catch (error) {
            return false;
        }
    }

    @Mutation(returns => Boolean)
    async deleteCourse(@Args('courseID', { type: () => ID }) courseID: string) {
        let result = await this.courseService.deleteCourse(courseID);
        if (result.deletedCount > 0) {
            return true;
        } else {
            return false;
        }

    }
}
