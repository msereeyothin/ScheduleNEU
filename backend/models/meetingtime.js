import mongoose from "mongoose";

const MeetingTimeSchema = new mongoose.Schema({
  start: Number,
  end: Number,
});

export { MeetingTimeSchema };
