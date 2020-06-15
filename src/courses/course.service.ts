import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './interface/course.interface';
import { CourseInput, EnrollInput } from './types/graphql-types';

@Injectable()
export class CourseService {
    constructor(
        @InjectModel('Course') private readonly courseModel: Model<Course>,
    ) { }

    async getAllCourse() {
        return await this.courseModel.find().exec();
    }

    async findCourseById(id: string) {
        return await this.courseModel.findOne({ id: id }).exec();
    }

    async findCoursesByInstructorId(id: string) {
        return await this.courseModel.find({ authorID: id }).exec();
    }

    async findCourseByTitle(title: string) {
        const results = await this.courseModel.find({ $text: { $search: title } });
        return results;
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

    async checkUserIsEnrolled(enrollData: EnrollInput) {
        const course = await this.courseModel.findOne({ id: enrollData.courseID });
        const isEnroll = course.enrolledUsers.includes(enrollData.userID)
        return isEnroll;
    }

    async enrollCourse(enrollData: EnrollInput) {
        try {
            const isEnroll = await this.checkUserIsEnrolled(enrollData)
            if(!isEnroll){
                const EnrollCourse = await this.courseModel.findOneAndUpdate({ id: enrollData.courseID }, { $push: { enrolledUsers: enrollData.userID }, $inc: { enrolled: 1 } });
                return EnrollCourse;
            }
            return false;
        } catch (error) {
            return error;
        }

    }
    
    async unenrollCourse(enrollData: EnrollInput) {
        try {
            const isEnroll = await this.checkUserIsEnrolled(enrollData)
            if(isEnroll){
                const EnrollCourse = await this.courseModel.findOneAndUpdate({ id: enrollData.courseID }, { $pull: { enrolledUsers: enrollData.userID }, $inc: { enrolled: -1 } });
                return EnrollCourse;
            }
            return false;
        } catch (error) {
            return error;
        }
    }
}
