import React from "react";
import { Course } from "../../../utils/types";
import { Box } from "@mui/material";
import { courseNodeToString } from "../../../utils/utils";
import AddButton from "../../Buttons/AddButton";

function AddCourseDisplay({
  course,
  alreadyAdded,
  addCourse,
}: {
  course: Course;
  alreadyAdded: boolean;
  addCourse: (course: Course) => void;
}) {
  const onClick = () => {
    if (!alreadyAdded) {
      addCourse(course);
    }
  };
  return (
    <Box sx={{ width: "100%", padding: "8px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span style={{ fontWeight: "bold" }}>
            {courseNodeToString(course)}
          </span>{" "}
          <br />
          <span>{course.name}</span>
        </div>
        <div>
          <AddButton onClick={onClick} disabled={alreadyAdded}></AddButton>
        </div>
      </Box>
    </Box>
  );
}

export default AddCourseDisplay;
