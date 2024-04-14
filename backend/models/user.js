import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  planIds: [{ type: Schema.Types.ObjectId }],
});

const User = mongoose.model("User", UserSchema);
export default User;
