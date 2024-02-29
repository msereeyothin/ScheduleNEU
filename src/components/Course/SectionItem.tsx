import { Section } from "../../common/types";
import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { dayToString, SingleMeeting } from "../../common/types";
import {
  meetingToSingleMeeting,
  secondsToTime,
} from "../../common/utils";

interface SectionItemProps {
  section: Section;
  name: string;
  sectionIndex: number;
  isSelected: boolean;
  onClick: () => void;
  setSingleHoverMeeting: React.Dispatch<React.SetStateAction<SingleMeeting[]>>;
}

const SectionItem: React.FC<SectionItemProps> = ({
  section,
  name,
  sectionIndex,
  isSelected,
  onClick,
  setSingleHoverMeeting,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const handleOnHover = (section: Section) => {
    setSingleHoverMeeting([meetingToSingleMeeting(name, section.meetings)]);
  };
  const handleMouseLeave = () => {
    setSingleHoverMeeting([]);
  };

  return (
    <div
      onMouseOver={() => {
        handleOnHover(section);
      }}
      onMouseLeave={handleMouseLeave}
    >
      <Accordion
        expanded={expanded}
        sx={{
          "&:hover": {
            backgroundColor: "lightblue", // Change color on hover
          },
          ...(isSelected && {
            backgroundColor: "lightblue", // Stay highlighted on select
          }),
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon onClick={toggleExpanded} />}
          onClick={onClick}
        >
          Section {sectionIndex + 1}
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {section.meetings.map((meeting, meetingIndex) => {
              return (
                <div>
                  {section.campus === "Online" ? (
                    <p>Online</p>
                  ) : (
                    <div key={meetingIndex}>
                      {Object.entries(meeting.times).map(
                        ([day, meetingTimes]) => (
                          <div key={day}>
                            {`${dayToString(parseInt(day))}: ` +
                              meetingTimes.map(
                                (time) =>
                                  `${secondsToTime(
                                    time.start
                                  )} - ${secondsToTime(time.end)}`
                              )}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SectionItem;
