import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './interface/course.interface';

@Injectable()
export class CourseService {
    constructor(
        @InjectModel('Course') private readonly userModel: Model<Course>,
    ) { }

   async getCourses() {
        return await true
   }
}
