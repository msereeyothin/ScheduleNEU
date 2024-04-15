import User from "../models/user.js";

async function addPlan(req, res) {
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
}

async function updatePlan(req, res) {
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
}

async function deletePlan(req, res) {
  const { uuid, planId } = req.query;

  try {
    const result = await User.updateOne(
      { uuid },
      { $pull: { plans: { _id: planId } } }
    );

    if (result.modifiedCount === 0) {
      res.status(404).send("Plan not found or User not found");
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Error deleting plan:", error);
    res.status(500).send("Server Error");
  }
}

async function getPlans(req, res) {
  const { uuid } = req.query;

  try {
    const user = await User.findOne({ uuid });
    if (user) {
      res.status(200).json(user.plans);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error fetching plans:", error);
    res.status(500).send("Server Error");
  }
}

export { addPlan, updatePlan, deletePlan, getPlans };
