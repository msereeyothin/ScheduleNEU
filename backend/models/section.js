import mongoose from "mongoose";
import { MeetingSchema } from "./meeting.js";

const SectionSchema = new mongoose.Schema({
  crn: { type: String },
  profs: { type: [String] },
  seatsCapacity: { type: Number },
  seatsRemaining: { type: Number },
  meetings: [MeetingSchema],
  name: { type: String },
  campus: { type: String },
});

export { SectionSchema };
