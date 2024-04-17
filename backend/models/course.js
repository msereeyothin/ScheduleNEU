import mongoose from 'mongoose';
import { SectionSchema } from "./section.js";


const CourseSchema = new mongoose.Schema({
    name: { type: String },
    subject: { type: String },
    classId: { type: String },
    sections: [SectionSchema],
  });

  export { CourseSchema };