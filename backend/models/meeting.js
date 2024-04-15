import mongoose from "mongoose";
import { MeetingTimeSchema } from "./meetingtime.js";


const MeetingSchema = new mongoose.Schema({
    type: { type: String },
    times: {
      type: Map,
      of: [MeetingTimeSchema],
    },
    where: { type: String },
    endDate: { type: Number },
    startDate: { type: Number },
  });

export { MeetingSchema };
