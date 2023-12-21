import React from "react";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import { CourseNode } from "../../common/types";

interface RemoveButtonProps {
  handleClick: (course: CourseNode) => void;
  course: CourseNode;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ handleClick, course }) => {
  return (
    <Fab
      size="small"
      color="primary"
      aria-label="add"
      onClick={() => handleClick(course)}
    >
      <DeleteIcon />
    </Fab>
  );
};

export default RemoveButton;
