import React from "react";
import { useState } from "react";
import { CourseNode, Section } from "../../common/types";
import { courseNodeToString, meetingToSingleMeeting } from "../../common/utils";
import { Box } from "@mui/material";
import AddButton from "../Buttons/AddButton";
import RemoveButton from "../Buttons/RemoveButton";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SectionItem from "./SectionItem";
import { alreadyExists } from "../../common/utils";
import { SingleMeeting } from "../../common/types";

interface CourseDropDownProps {
  course: CourseNode;
  courseList: CourseNode[];
  setSingleMeetings: React.Dispatch<React.SetStateAction<SingleMeeting[]>>;
  setCourseList: React.Dispatch<React.SetStateAction<CourseNode[]>>;
}

const CourseDropdown: React.FC<CourseDropDownProps> = ({
  courseList,
  course,
  setSingleMeetings,
  setCourseList,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [exists, setExists] = useState<boolean>(
    alreadyExists(course, courseList)
  );
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number>(-1);
  let previousSelectedSectionIndex = -1;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleSectionClick = (sectionIndex: number) => {
    previousSelectedSectionIndex = selectedSectionIndex;
    setSelectedSectionIndex((prevIndex) => {
      const newIndex = sectionIndex === prevIndex ? -1 : sectionIndex;
      updateSelectedSections(newIndex);
      return newIndex;
    });
  };

  const updateSelectedSections = (sectionIndex: number) => {
    setSingleMeetings((prevSingleMeetings) => {
      let updatedSections = [...prevSingleMeetings];
      if (sectionIndex !== -1) {
        updatedSections.push(
          meetingToSingleMeeting(
            course.name,
            course.sections[sectionIndex].meetings
          )
        );
        if (previousSelectedSectionIndex !== -1) {
          updatedSections = updatedSections.filter(
            (s: SingleMeeting) =>
              JSON.stringify(s) !==
              JSON.stringify(
                meetingToSingleMeeting(
                  course.name,
                  course.sections[previousSelectedSectionIndex].meetings
                )
              )
          );
        }
      } else {
        if (previousSelectedSectionIndex !== -1) {
          updatedSections = updatedSections.filter(
            (s: SingleMeeting) =>
              JSON.stringify(s) !==
              JSON.stringify(
                meetingToSingleMeeting(
                  course.name,
                  course.sections[previousSelectedSectionIndex].meetings
                )
              )
          );
        }
      }
      return updatedSections;
    });
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
                course={course}
                setCourseList={setCourseList}
              ></AddButton>
            ) : (
              <RemoveButton
                setSingleMeetings={setSingleMeetings}
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
                  isSelected={selectedSectionIndex === sectionIndex}
                  onClick={() => handleSectionClick(sectionIndex)}
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
