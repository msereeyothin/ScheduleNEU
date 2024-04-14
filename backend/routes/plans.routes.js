import express from "express";
const router = express.Router();
import PlanController from "../controllers/plan.controller.js";

router.get("/", PlanController.apiGetPlans);
router.post("/add", PlanController.apiAddPlan);
router.post("/update/:id", PlanController.apiUpdatePlan)
router.delete("/delete/:id", PlanController.apiDeletePlan);

// router.post("/updatePlan", async (req, res) => {
//   const { uuid, planId, updates } = req.body;

//   try {
//     const user = await User.findOne({ uuid });
//     if (user) {
//       const planIndex = user.plans.findIndex((p) => p.id === planId);
//       if (planIndex !== -1) {
//         user.plans[planIndex] = { ...user.plans[planIndex], ...updates };
//         await user.save();
//         res.status(200).json(user.plans[planIndex]);
//       } else {
//         res.status(404).send("Plan not found");
//       }
//     } else {
//       res.status(404).send("User not found");
//     }
//   } catch (error) {
//     console.error("Error updating plan:", error);
//     res.status(500).send("Server Error");
//   }
// });

// router.delete("/deletePlan", async (req, res) => {
//   const { uuid, planId } = req.body;

//   try {
//     const user = await User.findOne({ uuid });
//     const plan = user.plans.id(planId);
//     if (!plan) {
//       return res.status(404).send("Plan not found");
//     }
//     plan.remove();
//     await user.save();
//     res.status(204).send();
//   } catch (error) {
//     console.error("Error deleting plan:", error);
//     res.status(500).send("Server Error");
//   }
// });

export default router;
