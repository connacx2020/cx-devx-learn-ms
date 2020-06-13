import { Document } from 'mongoose';

export interface Course extends Document {
    id: String,
    authorID: String,
    title: String,
    rating: number,
    photoUrl: String,
    seriesId: String,
    enrolled: number,
    description: String,
    duration: String,
    outcome: [string],
    prerequisite: [string],
    enrolledUsers: [String]
};


