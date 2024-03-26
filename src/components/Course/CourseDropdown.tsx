import React from "react";
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
import { Course, Section } from "../../common/types";

interface CourseDropDownProps {
  course: Course;
  setSections: React.Dispatch<React.SetStateAction<Section[]>>;
  setHoverSection: React.Dispatch<React.SetStateAction<Section[]>>;
  setCourseList: React.Dispatch<React.SetStateAction<Course[]>>;
}

const accordionStyle = {
  borderRadius: "15px",
};

/**
 * This CourseDropdown component works, but it's pretty (too) complex and stuff
 * should probably be abstracted into a hook or something. But for now it works.
 */
const CourseDropdown: React.FC<CourseDropDownProps> = ({
  course,
  setSections,
  setHoverSection,
  setCourseList,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number>(-1);
  let previousSelectedSectionIndex = -1;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Adds the clicked section to the list of single meetings
  const handleSectionClick = (sectionIndex: number) => {
    previousSelectedSectionIndex = selectedSectionIndex;
    setSelectedSectionIndex((prevIndex) => {
      const newIndex = sectionIndex === prevIndex ? -1 : sectionIndex;
      updateSelectedSections(newIndex);
      return newIndex;
    });
  };

  // Updates the course that is highlighted when clicked
  const updateSelectedSections = (sectionIndex: number) => {
    setSections((prevSections) => {
      let updatedSections = [...prevSections];
      if (sectionIndex !== -1) {
        updatedSections.push(course.sections[sectionIndex]);
        if (previousSelectedSectionIndex !== -1) {
          updatedSections = updatedSections.filter(
            (prevSection) =>
              JSON.stringify(prevSection) !==
              JSON.stringify(course.sections[previousSelectedSectionIndex])
          );
        }
      } else {
        if (previousSelectedSectionIndex !== -1) {
          updatedSections = updatedSections.filter(
            (prevSection) =>
              JSON.stringify(prevSection) !==
              JSON.stringify(course.sections[previousSelectedSectionIndex])
          );
        }
      }
      return updatedSections;
    });
  };

  // Remove this course from the list
  const removeCourse = () => {
    setCourseList((prevCourseList: Course[]) =>
      prevCourseList.filter((c: Course) => c.name !== course.name)
    );
  };

  // Remove all sections under this course
  const removeCourseSections = () => {
    setSections((prevSections) => {
      const updatedSections = [...prevSections];
      const filteredSections = updatedSections.filter(
        (section) => section.name !== course.name
      );
      return filteredSections;
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
              <RemoveButton
                onClick={() => {
                  removeCourse();
                  removeCourseSections();
                }}
              ></RemoveButton>
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
