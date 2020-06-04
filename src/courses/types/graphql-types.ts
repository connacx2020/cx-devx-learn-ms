import { InputType, Field, ObjectType, ID, Int } from '@nestjs/graphql';

@InputType()
export class CourseInput {
    @Field(type => ID)
    authorID: string;
    @Field(type => String)
    title: string;
    @Field(type => String)
    rating: string;
    @Field(type => String)
    photoUrl: string;
    @Field(type => [String])
    courseContent: [string];
}

@ObjectType()
export class CourseType {
    @Field(type => ID)
    id: string;
    @Field(type => ID)
    authorID: string;
    @Field(type => String)
    title: string;
    @Field(type => String)
    rating: string;
    @Field(type => String)
    photoUrl: string;
    @Field(type => [String])
    courseContent: [string];
    @Field(type => Number)
    likes: number;
    @Field(type => Number)
    enrolled: number;
}
