const mongoose = require("mongoose");

const MeetingTimeSchema = new mongoose.Schema({
  start: Number,
  end: Number,
});

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

const SectionSchema = new mongoose.Schema({
  crn: { type: String },
  profs: { type: [String] },
  seatsCapacity: { type: Number },
  seatsRemaining: { type: Number },
  meetings: [MeetingSchema],
  name: { type: String },
  campus: { type: String },
});

const CourseSchema = new mongoose.Schema({
  name: { type: String },
  subject: { type: String },
  classId: { type: String },
  sections: [SectionSchema],
});

const PlanSchema = new mongoose.Schema({
  name: { type: String },
  term: { type: String },
  campus: { type: String },
  _id: { type: String },
  courses: [CourseSchema],
  sections: [],
});

const UserSchema = new mongoose.Schema({
  uuid: { type: String, required: true, unique: true },
  plans: [PlanSchema],
});

module.exports = mongoose.model("User", UserSchema);
