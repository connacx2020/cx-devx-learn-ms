import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
    id: String,
    authorID: String,
    title: String,
    rating: Number,
    photoUrl: String,
    seriesId: String,
    enrolled: Number,
    description: String,
    duration: String,
    outcome: [String],
    prerequisite: [String],
    enrolledUsers: [String],
    topicID: [String]
});
