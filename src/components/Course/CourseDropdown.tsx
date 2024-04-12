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
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

interface CourseDropDownProps {
  plan: Plan;
  setHoverSection: React.Dispatch<React.SetStateAction<Section[]>>;
  course: Course;
  removeCourse: (course: Course) => void;
  addSection: (section: Section) => void;
  removeSection: (section: Section) => void;
  dragHandleProps: DragHandleProps;
}

interface DragHandleProps {
  listeners: any;
  attributes: any;
  setNodeRef: React.Ref<any>;
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
  dragHandleProps,
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

  const toggleExpanded = (e: React.MouseEvent) => {
    e.stopPropagation();
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

  const onRemoveCourse = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the accordion from toggling when removing a course
    removeCourse(course);
    removeCourseSections();
  };

  return (
    <Box
      sx={{ width: "100%", paddingBottom: 1 }}
      ref={dragHandleProps.setNodeRef}
    >
      <Accordion expanded={expanded} square={true} sx={accordionStyle}>
        <AccordionSummary>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div
                {...dragHandleProps.listeners}
                {...dragHandleProps.attributes}
                style={{ cursor: "grab", marginRight: "10px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <DragIndicatorIcon />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      {courseNodeToString(course)}
                    </span>
                    <div>{course.name}</div>
                  </div>
                </Box>
              </div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <RemoveButton onClick={onRemoveCourse}></RemoveButton>
                  </div>
                </Box>
              </Box>
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
