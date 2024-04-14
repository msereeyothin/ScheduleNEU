const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/addPlan", async (req, res) => {
  const { uuid, plan } = req.body;

  try {
    const user = await User.findOne({ uuid });
    if (user) {
      user.plans.push(plan);
      await user.save();
      const newPlan = user.plans[user.plans.length - 1];
      console.log("Newly added plan:", newPlan);
      res.status(201).json(newPlan);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error adding plan:", error);
    res.status(500).send("Server Error");
  }
});

router.post("/updatePlan", async (req, res) => {
  const { uuid, planId, updates } = req.body;

  try {
    const user = await User.findOne({ uuid });
    if (user) {
      const planIndex = user.plans.findIndex((p) => p.id === planId);
      if (planIndex !== -1) {
        user.plans[planIndex] = { ...user.plans[planIndex], ...updates };
        await user.save();
        res.status(200).json(user.plans[planIndex]);
      } else {
        res.status(404).send("Plan not found");
      }
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error updating plan:", error);
    res.status(500).send("Server Error");
  }
});

router.delete("/deletePlan", async (req, res) => {
  const { uuid, planId } = req.body;

  try {
    const user = await User.findOne({ uuid });
    const plan = user.plans.id(planId);
    if (!plan) {
      return res.status(404).send("Plan not found");
    }
    plan.remove();
    await user.save();
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting plan:", error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
