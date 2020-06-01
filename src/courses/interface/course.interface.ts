import { Document } from 'mongoose';

export interface Course extends Document {
    id: String,
    name: String,
    rating: String,
    photoUrl: String,
    courseContent: [String]
};
