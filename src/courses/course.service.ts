import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './interface/course.interface';
import { CourseInput } from './types/graphql-types';

@Injectable()
export class CourseService {
    constructor(
        @InjectModel('Course') private readonly courseModel: Model<Course>,
    ) { }

    async getAllCourse() {
        return await this.courseModel.find().exec();
    }

    async addNewCourse(newCourse: CourseInput) {
        const createdNewCourse = new this.courseModel(newCourse);
        try {
            await createdNewCourse.save();
            return createdNewCourse;
        } catch (error) {
            return error;
        }
    }
}
