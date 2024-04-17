import { Plan } from "../common/types";

/**
 *
 * Get all plans from the local storage
 *
 * @returns A list of plans
 */
export function getAllPlans() {
  let plans: Plan[] = [];

  // Code here to retrieve plans from local storage

  return plans;
}

/**
 *
 * Add a plan to the local storage
 *
 * @param plan
 */
export function addPlan(plan: Plan) {
  // Add a given plan to local storage
}

/**
 *
 * Remove the plan with the matching name
 *
 * @param planName
 */
export function removePlan(planName: string) {}

/**
 *
 * Update/Replace the plan with the given plan
 *
 * @param plan
 */
export function updatePlan(planName: string, plan: Plan) {}
