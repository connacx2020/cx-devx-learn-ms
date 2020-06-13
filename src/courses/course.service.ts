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
        const course = await this.courseModel.findOne({ id: enrollData.courseID }, (err, result) => {
            if(err) console.log(err);
            const tempEnrollUsers = result.enrolledUsers;
            const hasUserId = tempEnrollUsers.find(userid => userid === enrollData.userID);
            if(hasUserId === enrollData.userID){
                return true;
            }else{
                return false;
            }
        })
    }
    async enrollCourse(enrollData: EnrollInput) {
        console.log(enrollData.courseID);
        console.log(enrollData.userID)
        try {
            const course = await this.courseModel.findOneAndUpdate({ id: enrollData.courseID }, { $push: { enrolledUsers: enrollData.userID }, $inc: { enrolled: 1 }  }, (err, result) => {
                if (err) console.log(err);
            });
            return course;
        } catch (error) {
            return error;
        }

    }
    async unenrollCourse(enrollData: EnrollInput) {
        try {
            const course = await this.courseModel.findOneAndUpdate({ id: enrollData.courseID }, { $pull: { enrolledUsers: enrollData.userID }, $inc: { enrolled: -1 } });
            return course;
        } catch (error) {
            return error;
        }
    }
}
