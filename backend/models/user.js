import mongoose from 'mongoose';
import { PlanSchema } from './plan.js';

const UserSchema = new mongoose.Schema({
  uuid: { type: String, required: true, unique: true },
  username: { type: String, unique: true },
  password: { type: String },
  plans: [PlanSchema],
});

export default mongoose.model("User", UserSchema);
