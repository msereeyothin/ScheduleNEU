import React, { useEffect } from "react";
import { useState } from "react";
import { courseNodeToString } from "../../common/utils";
import RemoveButton from "../Buttons/RemoveButton";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SectionItem from "./SectionItem";
import { Course, Section, Plan } from "../../common/types";

interface CourseDropDownProps {
  plan: Plan;
  setHoverSection: React.Dispatch<React.SetStateAction<Section[]>>;
  course: Course;
  removeCourse: (course: Course) => void;
  addSection: (section: Section) => void;
  removeSection: (section: Section) => void;
}

const accordionStyle = {
  borderRadius: "15px",
};

const CourseDropdown: React.FC<CourseDropDownProps> = ({
  plan,
  setHoverSection,
  course,
  removeCourse,
  addSection,
  removeSection,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number>(-1);

  useEffect(() => {
    let curSection = plan.sections.find(
      (section) => section.name === course.name
    );
    if (curSection) {
      const index = course.sections
        .map((section) => section.crn)
        .indexOf(curSection.crn);
      setSelectedSectionIndex(index);
    }
  }, [plan, course]);

  let prevIndex = -1;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Adds the clicked section to sections
  const handleSectionClick = (sectionIndex: number) => {
    prevIndex = selectedSectionIndex;
    setSelectedSectionIndex((prevIndex) => {
      const newIndex = sectionIndex === prevIndex ? -1 : sectionIndex;
      updateSelectedSections(newIndex);
      return newIndex;
    });
  };

  // Updates the course that is highlighted when clicked
  const updateSelectedSections = (sectionIndex: number) => {
    if (sectionIndex !== -1) {
      addSection(course.sections[sectionIndex]);
      if (prevIndex !== -1) {
        removeSection(course.sections[prevIndex]);
      }
    } else {
      if (prevIndex !== -1) {
        removeSection(course.sections[prevIndex]);
      }
    }
  };

  // Remove all sections under this course
  const removeCourseSections = () => {
    plan.sections.forEach((section) => {
      if (section.name === course.name) {
        removeSection(section);
      }
    });
  };

  return (
    <Box sx={{ width: "100%", paddingBottom: 1 }}>
      <Accordion expanded={expanded} square={true} sx={accordionStyle}>
        <AccordionSummary>
          <Box sx={{ width: "100%" }}>
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
                </span>
                <div>{course.name}</div>
              </div>
              <div>
                <RemoveButton
                  onClick={() => {
                    removeCourse(course);
                    removeCourseSections();
                  }}
                ></RemoveButton>
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ExpandMoreIcon onClick={toggleExpanded} />
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            {course.sections &&
              course.sections.map((section, sectionIndex) => (
                <SectionItem
                  isSelected={selectedSectionIndex === sectionIndex}
                  onClick={() => handleSectionClick(sectionIndex)}
                  section={section}
                  name={course.name}
                  sectionIndex={sectionIndex}
                  setHoverSection={setHoverSection}
                ></SectionItem>
              ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CourseDropdown;
