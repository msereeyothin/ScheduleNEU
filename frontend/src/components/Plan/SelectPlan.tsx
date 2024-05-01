import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Plan } from "../../utils/types";
import { SelectChangeEvent } from "@mui/material";

function SelectPlan({
  plan,
  plans,
  setPlan,
}: {
  plan: Plan;
  plans: Plan[];
  setPlan: (plan: Plan) => void;
}) {
  const handlePlanChange = (event: SelectChangeEvent) => {
    let planID = event.target.value as string;
    let curPlan = plans.find((plan) => plan.name === planID);
    if (curPlan) {
      setPlan(curPlan);
    } else {
      console.error(`Plan wtih ID:${planID} not found.`);
    }
  };

  return (
    <FormControl sx={{width:"20vw"}}>
      <InputLabel>Select Plan</InputLabel>
      <Select value={plan.name} label="Select Plan" onChange={handlePlanChange}>
        {plans.map((plan) => (
          <MenuItem value={plan.name}> {plan.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectPlan;
