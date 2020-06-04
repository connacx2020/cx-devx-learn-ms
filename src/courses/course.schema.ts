import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
    id: String,
    authorID: String,
    title: String,
    rating: String,
    photoUrl: String,
    courseContent: [String],
    likes: Number,
    enrolled: Number
});
