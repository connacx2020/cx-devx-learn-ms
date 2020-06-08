import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppResolver } from './app.resolver';
import { CourseModule } from './courses/course.module';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
      GraphQLModule.forRoot({
          autoSchemaFile: '/tmp/schema.gql'
      }),
      MongooseModule.forRoot(`mongodb://${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }),
      CourseModule
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
