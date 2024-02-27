import React from "react";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import { CourseNode, SingleMeeting } from "../../common/types";

interface RemoveButtonProps {
  course: CourseNode;
  setCourseList: React.Dispatch<React.SetStateAction<CourseNode[]>>;
  setSingleMeetings: React.Dispatch<React.SetStateAction<SingleMeeting[]>>;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({
  course,
  setCourseList,
  setSingleMeetings,
}) => {
  const removeCourse = () => {
    setCourseList((prevCourseList: CourseNode[]) =>
      prevCourseList.filter((c: CourseNode) => c.name !== course.name)
    );
  };
  // Remove all single meetings under this course.
  const updateSingleMeetings = () => {
    setSingleMeetings((prevSingleMeetings) => {
      const newSingleMeetings = [...prevSingleMeetings];
      const filteredSingleMeetings = newSingleMeetings.filter(
        (singleMeeting) => singleMeeting.name !== course.name
      );
      return filteredSingleMeetings;
    });
  };

  return (
    <Fab
      size="small"
      color="primary"
      aria-label="add"
      onClick={() => {
        removeCourse();
        updateSingleMeetings();
      }}
    >
      <DeleteIcon />
    </Fab>
  );
};

export default RemoveButton;
