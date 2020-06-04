import { Document } from 'mongoose';

export interface Course extends Document {
    id: String,
    authorID: String,
    title: String,
    rating: String,
    photoUrl: String,
    courseContent: [string],
    likes: number,
    enrolled: number,
};
