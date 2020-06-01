import { InputType, Field, ObjectType, ID, Int } from '@nestjs/graphql';

@InputType()
export class CourseInput {
    @Field(type => ID)
    id: string;
    @Field(type => String)
    name: string;
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
    @Field(type => String)
    name: string;
    @Field(type => String)
    rating: string;
    @Field(type => String)
    photoUrl: string;
    @Field(type => [String])
    courseContent: [string];
}
