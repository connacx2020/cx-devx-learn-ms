import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
    id: String,
    authorID: String,
    title: String,
    rating: Number,
    photoUrl: String,
    courseContent: [String],
    enrolled: Number,
    description: String,
    duration: String,
    outcome: [String],
    preRequested: [String]
});
