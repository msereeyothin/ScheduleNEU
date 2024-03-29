import { Box, Typography } from "@mui/material";
import GenericButton from "../Generic/GenericButton";
import { termIdToString } from "../../common/utils";
import DeleteIcon from "@mui/icons-material/Delete";
import { Plan } from "../../common/types";

function PlanInfoDisplay({
  plan,
  handleRemovePlan,
}: {
  plan: Plan;
  handleRemovePlan: () => void;
}) {
  return (
    <Box
      sx={{
        paddingBottom: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h2" sx={{ wordBreak: "break-word" }}>
          {plan.name}
        </Typography>
        <Typography variant="subtitle1">
          {plan.isEmpty ? "" : plan.campus + " " + termIdToString(plan.term)}
        </Typography>
      </Box>
      <Box sx={{ width: "55px", height: "55px" }}>
        {plan.isEmpty ? (
          <></>
        ) : (
          <GenericButton
            variant="outlined"
            color="error"
            onClick={handleRemovePlan}
          >
            <DeleteIcon sx={{ width: "25px", height: "25px" }} />
          </GenericButton>
        )}
      </Box>
    </Box>
  );
}

export default PlanInfoDisplay;
