const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");

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

module.exports = router;
