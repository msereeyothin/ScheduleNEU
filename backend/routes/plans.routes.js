import express from "express";
import {
  addPlan,
  updatePlan,
  deletePlan,
  getPlans,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/addPlan", addPlan);
router.post("/updatePlan", updatePlan);
router.delete("/deletePlan", deletePlan);
router.get("/getPlans", getPlans);

export default router;
