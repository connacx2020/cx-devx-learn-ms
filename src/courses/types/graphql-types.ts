import { InputType, Field, ObjectType, ID, Int, Float } from '@nestjs/graphql';

@InputType()
export class CourseInput {
    @Field(type => ID)
    authorID: string;
    @Field(type => String)
    title: string;
    @Field(type => String)
    photoUrl: string;
    @Field(type => [String])
    courseContent: [string];
    @Field(type => String)
    description: string;
    @Field(type => [String])
    outcome: [string];
    @Field(type => [String])
    preRequested: [string];
    @Field(type => String)
    duration: string;
}

@ObjectType()
export class CourseType {
    @Field(type => ID)
    id: string;
    @Field(type => ID)
    authorID: string;
    @Field(type => String)
    title: string;
    @Field(type => Float)
    rating: number;
    @Field(type => String)
    photoUrl: string;
    @Field(type => [String])
    courseContent: [string];
    @Field(type => Number)
    enrolled: number;
    @Field(type => String)
    description: string;
    @Field(type => [String])
    outcome: [string];
    @Field(type => [String])
    preRequested: [string];
    @Field(type => String)
    duration: string
}
