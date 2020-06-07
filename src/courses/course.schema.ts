import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
    id: String,
    authorID: String,
    title: String,
    rating: Number,
    photoUrl: String,
    courseContent: [String],
    likes: Number,
    enrolled: Number,
    description: String,
    duration: String,
    outcome: [String],
    preRequest: [String]
});
