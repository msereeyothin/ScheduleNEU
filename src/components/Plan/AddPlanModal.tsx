import React from "react";
import { Plan } from "../../common/types";
import GenericButton from "../Generic/GenericButton";
import GenericModal from "../Generic/GenericModal";
import { Typography, Box } from "@mui/material";

interface AddPlanModalProps {
  addPlan: (newPlan: Plan) => void;
}

function AddPlanModal({ addPlan }: AddPlanModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <GenericButton onClick={handleOpen}>
        <Typography>Add Plan</Typography>
      </GenericButton>
      <GenericModal open={open} onClose={handleClose}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography>Add Plan</Typography>
        </Box>
      </GenericModal>
    </>
  );
}

export default AddPlanModal;
