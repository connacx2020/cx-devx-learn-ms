import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
    id: String,
    authorID: String,
    title: String,
    rating: Number,
    price: Number,
    photoUrl: String,
    seriesID: String,
    enrolled: Number,
    description: String,
    duration: String,
    outcome: [String],
    prerequisite: [String],
    enrolledUsers: [String],
    topicID: [String]
});
