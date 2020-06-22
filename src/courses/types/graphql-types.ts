import { InputType, Field, ObjectType, ID, Float } from '@nestjs/graphql';

@InputType()
export class EnrollInput{
    @Field(type =>ID)
    courseID:String;
    @Field(type => ID )
    userID:String;

}

@InputType()
export class CourseInput {
    @Field(type => ID)
    authorID: string;
    @Field(type => String)
    title: string;
    @Field(type => String)
    photoUrl: string;
    @Field(type => Number)
    price: number;
    @Field(type => ID)
    seriesID: string;
    @Field(type => String)
    description: string;
    @Field(type => [String])
    outcome: [string];
    @Field(type => [String])
    prerequisite: [string];
    @Field(type => String)
    duration: string;
    @Field(type => [ID])
    topicID: [string];
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
    @Field(type => Number)
    price: number;
    @Field(type => ID)
    seriesID: string;
    @Field(type => Number)
    enrolled: number;
    @Field(type => String)
    description: string;
    @Field(type => [String])
    outcome: [string];
    @Field(type => [String])
    prerequisite: [string];
    @Field(type => String)
    duration: string;
    @Field(type =>[ID])
    enrolledUsers: [String];
    @Field(type => [ID])
    topicID: [string];
}
