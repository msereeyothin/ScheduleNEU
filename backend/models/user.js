import mongoose from 'mongoose';
import { PlanSchema } from './plan.js';

const UserSchema = new mongoose.Schema({
  uuid: { type: String, required: true, unique: true },
  plans: [PlanSchema],
});

export default mongoose.model("User", UserSchema);
