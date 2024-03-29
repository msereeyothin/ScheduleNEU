import { Plan } from "../common/types";
import React from "react";

function usePlans() {
  const [plans, setPlans] = React.useState<Plan[]>([]);

  function addPlan(plan: Plan) {
    setPlans((prevPlans) => [...prevPlans, plan]);
  }
  function removePlan(plan: Plan) {
    setPlans((prevPlans) => {
      let updatedPlans = prevPlans;
      updatedPlans = prevPlans.filter(
        (prevPlan) => JSON.stringify(prevPlan) !== JSON.stringify(plan)
      );
      return updatedPlans;
    });
  }

  return { plans, addPlan, removePlan };
}

export default usePlans;