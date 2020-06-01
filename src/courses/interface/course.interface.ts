import { Document } from 'mongoose';

export interface Course extends Document {
    id: String,
    authorID: String,
    name: String,
    rating: String,
    photoUrl: String,
    courseContent: [string]
};
