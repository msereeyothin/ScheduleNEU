import Connection from "../db/connection.js";
import mongoose from "mongoose";
import Plan from "../models/Plan.js";

// Not implemented with users yet
export default class PlanController {
  // Works
  static async apiGetPlans(req, res, next) {
    try {
      await Connection.open();
      const plans = await Plan.find({});
      res.json(plans);
    } catch (error) {
      console.error("Error getting plans:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Works
  static async apiAddPlan(req, res, next) {
    const { name, term, campus, courses, userSections } = req.body;
    try {
      await Connection.open();
      const plan = await Plan.create({
        name,
        term,
        campus,
        courses,
        userSections,
      });
      res.status(200).json(plan);
      // USER STUFF
      //   const user = await User.findOne(Types.ObjectId(userID));
      //   if (user) {
      //     user.planIDs.push(plan.ObjectId);
      //     await user.save();
      //     console.log("New Plan Added:", plan);
      //     res.status(201).json(plan);
      //   } else {
      //     res.status(404).send("User not found");
      //   }
    } catch (error) {
      console.error("Error adding plan:", error);
      res.status(500).send("Server Error");
    }
  }

  // Haven't tested
  static async apiUpdatePlan(req, res, next) {
    const id = req.params.id;
    const updatedPlanData = req.body;
    try {
      await Connection.open();
      const updatedPlan = await Plan.findByIdAndUpdate(
        new mongoose.Types.ObjectId(id),
        updatedPlanData,
        {
          new: true,
        }
      );
      if (updatedPlan) {
        res.json({ message: "Plan updated successfully", updatedPlan });
      } else {
        res.status(404).json({ error: "Plan not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Works
  static async apiDeletePlan(req, res, next) {
    const id = req.params.id;
    try {
      await Connection.open();
      const deletedPlan = await Plan.findOneAndDelete({
        _id: new mongoose.Types.ObjectId(id),
      });
      if (deletedPlan) {
        res.json({ message: "Plan deleted successfully" });
      } else {
        res.status(404).json({ error: "Plan not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
