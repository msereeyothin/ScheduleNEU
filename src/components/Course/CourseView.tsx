import React from "react";
import { ReactNode } from "react";
import { CourseNode } from "../../common/types";
import { courseNodeToString } from "../../common/utils";
import { Box } from "@mui/material";
import AddButton from "../Buttons/AddButton";
import RemoveButton from "../Buttons/RemoveButton";

interface CourseViewProps {
  courseNode: CourseNode;
  alreadyExists: boolean;
  handleAdd: (course: CourseNode) => void;
  handleRemove: (course: CourseNode) => void;
  children?: ReactNode;
}

const CourseView: React.FC<CourseViewProps> = ({
  courseNode,
  alreadyExists,
  handleAdd,
  handleRemove,
  children,
}) => {
  const [exists, setExists] = React.useState(alreadyExists);
  const handleAddButton = (course: CourseNode) => {
    handleAdd(course);
    setExists(!exists);
  };
  const handleRemoveButton = (course: CourseNode) => {
    handleRemove(course);
    setExists(!exists);
  };
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        p: 2,
        border: "1px dashed grey",
      }}
    >
      <span style={{ fontWeight: "bold" }}>
        {courseNodeToString(courseNode)}
      </span>
      : {courseNode.name}
      <div className="ml-auto pr-4">
        {exists ? (
          <AddButton
            handleClick={handleAddButton}
            course={courseNode}
          ></AddButton>
        ) : (
          <RemoveButton
            handleClick={handleRemoveButton}
            course={courseNode}
          ></RemoveButton>
        )}
      </div>
      {children}
    </Box>
  );
};

export default CourseView;
