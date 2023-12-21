import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { CourseNode } from "../../common/types";

interface AddButtonProps {
  handleClick: (course: CourseNode) => void;
  course: CourseNode;
}

const AddButton: React.FC<AddButtonProps> = ({ handleClick, course }) => {
  return (
    <Fab
      size="small"
      color="primary"
      aria-label="add"
      onClick={() => handleClick(course)}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddButton;
