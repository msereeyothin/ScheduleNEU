import Connection from "../db/connection.js";
import { Types } from "mongoose";
import User from "../models/user.js";

export default class UserController {
  static async signUp(req, res) {
    const { name, email } = req.body;
    try {
      await Connection.open;
      const user = new User({ name, email });
      await user.save();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
