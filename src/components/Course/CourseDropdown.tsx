import React from "react";
import { useState } from "react";
import { CourseNode } from "../../common/types";
import { courseNodeToString } from "../../common/utils";
import { Box } from "@mui/material";
import AddButton from "../Buttons/AddButton";
import RemoveButton from "../Buttons/RemoveButton";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { dayToString } from "../../common/types";
import { secondsToTime } from "../../common/utils";
import SectionItem from "./SectionItem";

interface CourseDropDownProps {
  course: CourseNode;
  alreadyExists: boolean;
  handleAdd: (course: CourseNode) => void;
  handleRemove: (course: CourseNode) => void;
}

const CourseDropdown: React.FC<CourseDropDownProps> = ({
  course,
  alreadyExists,
  handleAdd,
  handleRemove,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

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
    <Accordion expanded={expanded} onChange={toggleExpanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <span style={{ fontWeight: "bold" }}>{courseNodeToString(course)}</span>
        : {course.name}
        <div className="ml-auto pr-4">
          {exists ? (
            <AddButton
              handleClick={handleAddButton}
              course={course}
            ></AddButton>
          ) : (
            <RemoveButton
              handleClick={handleRemoveButton}
              course={course}
            ></RemoveButton>
          )}
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {course.sections &&
            course.sections.map((section, sectionIndex) => (
              <SectionItem
                section={section}
                sectionIndex={sectionIndex}
              ></SectionItem>
            ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default CourseDropdown;
