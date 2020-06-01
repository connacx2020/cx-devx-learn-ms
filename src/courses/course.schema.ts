import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
    id: String,
    authorID: String,
    name: String,
    rating: String,
    photoUrl: String,
    courseContent: [String]
});
