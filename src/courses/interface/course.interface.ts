import { Document } from 'mongoose';

export interface Course extends Document {
    id: String,
    authorID: String,
    title: String,
    rating: number,
    photoUrl: String,
    courseContent: [string],
    likes: number,
    enrolled: number,
    description: String,
    duration: String,
    outcome: [string],
    preRequest: [string]
};