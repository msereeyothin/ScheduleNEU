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
      onClick={onClick}
      sx={{ backgroundColor: "transparent", boxShadow: 0 }}
    >
      <AddIcon color="primary" sx={{ width: "25px", height: "25px" }} />
    </Fab>
  );
};

export default AddButton;
