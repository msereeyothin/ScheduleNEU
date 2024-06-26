import express from "express";
import User from "../models/user.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let uuid = req.body.uuid || uuidv4();
    let user = await User.findOne({ uuid: uuid });

    if (!user) {
      user = new User({ uuid });
      await user.save();
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
