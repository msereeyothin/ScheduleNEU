import React from "react";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import { CourseNode } from "../../common/types";

interface RemoveButtonProps {
  courseList: CourseNode[];
  course: CourseNode;
  setCourseList: React.Dispatch<React.SetStateAction<CourseNode[]>>;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({
  courseList,
  course,
  setCourseList,
}) => {
  return (
    <Fab
      size="small"
      color="primary"
      aria-label="add"
      onClick={() => {
        setCourseList((prevCourseList: CourseNode[]) =>
          prevCourseList.filter((c: CourseNode) => c.classId !== course.classId)
        );
      }}
    >
      <DeleteIcon />
    </Fab>
  );
};

export default RemoveButton;
