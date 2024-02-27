import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { CourseNode } from "../../common/types";

interface AddButtonProps {
  course: CourseNode;
  setCourseList: React.Dispatch<React.SetStateAction<CourseNode[]>>;
}

const AddButton: React.FC<AddButtonProps> = ({
  course,
  setCourseList,
}) => {
  return (
    <Fab
      size="small"
      color="primary"
      aria-label="add"
      onClick={() => {
        setCourseList((prevCourseList) => [...prevCourseList, course]);
      }}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddButton;
