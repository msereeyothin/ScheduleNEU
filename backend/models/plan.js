import mongoose from "mongoose";
import { CourseSchema } from "./course.js";

const PlanSchema = new mongoose.Schema({
  name: { type: String },
  term: { type: String },
  campus: { type: String },
  _id: { type: String },
  courses: [CourseSchema],
  sections: [],
});

export { PlanSchema };
