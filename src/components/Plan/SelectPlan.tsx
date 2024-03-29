import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Plan } from "../../common/types";
import { SelectChangeEvent, Box } from "@mui/material";

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
    <Box width={"70%"}>
      <FormControl fullWidth>
        <InputLabel>Select Plan</InputLabel>
        <Select value={plan.name} label="Plan" onChange={handlePlanChange}>
          {plans.map((plan) => (
            <MenuItem value={plan.name}> {plan.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectPlan;
