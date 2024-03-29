import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

interface AddButtonProps {
  onClick: () => void;
  disabled: boolean;
}
// React.Dispatch<React.SetStateAction<CourseNode[]>>
const AddButton: React.FC<AddButtonProps> = ({ onClick, disabled }) => {
  return (
    <Fab
      disabled={disabled}
      size="small"
      color="primary"
      aria-label="add"
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddButton;
