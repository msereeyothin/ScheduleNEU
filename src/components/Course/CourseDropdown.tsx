import React from "react";
import { useState } from "react";
import { CourseNode } from "../../common/types";
import { courseNodeToString } from "../../common/utils";
import { Box } from "@mui/material";
import AddButton from "../Buttons/AddButton";
import RemoveButton from "../Buttons/RemoveButton";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SectionItem from "./SectionItem";
import { alreadyExists } from "../../common/utils";

interface CourseDropDownProps {
  course: CourseNode;
  courseList: CourseNode[];
  setCourseList: React.Dispatch<React.SetStateAction<CourseNode[]>>;
}

const CourseDropdown: React.FC<CourseDropDownProps> = ({
  courseList,
  course,
  setCourseList,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [exists, setExists] = useState<boolean>(
    alreadyExists(course, courseList)
  );

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    const courseExists = alreadyExists(course, courseList);
    setExists(courseExists);
  }, [course, courseList]);

  return (
    <Box>
      <Accordion expanded={expanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon onClick={toggleExpanded} />}
          aria-controls="panel1a-content"
        >
          <span style={{ fontWeight: "bold" }}>
            {courseNodeToString(course)}
          </span>
          : {course.name}
          <div className="ml-auto pr-4">
            {exists ? (
              <AddButton
                courseList={courseList}
                course={course}
                setCourseList={setCourseList}
              ></AddButton>
            ) : (
              <RemoveButton
                courseList={courseList}
                course={course}
                setCourseList={setCourseList}
              ></RemoveButton>
            )}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            {course.sections &&
              course.sections.map((section, sectionIndex) => (
                <SectionItem
                  section={section}
                  sectionIndex={sectionIndex}
                ></SectionItem>
              ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CourseDropdown;
