import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppResolver } from './app.resolver';
import { CourseModule } from './courses/course.module';

@Module({
  imports: [
      GraphQLModule.forRoot({
          autoSchemaFile: '/tmp/schema.gql'
      }),
      MongooseModule.forRoot('mongodb://52.221.93.157/cx-learn'),
      CourseModule
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
