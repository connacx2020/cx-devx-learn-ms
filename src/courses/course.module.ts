import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseResolver } from './course.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from './course.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Course', schema: CourseSchema },
        ]),
    ],
    providers: [CourseService, CourseResolver],
    exports: [CourseService],
})
export class CourseModule { }
