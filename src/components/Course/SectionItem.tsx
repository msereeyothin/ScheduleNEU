import { Section } from "../../common/types";
import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { dayToString } from "../../common/types";
import { secondsToTime } from "../../common/utils";

interface SectionItemProps {
  section: Section;
  sectionIndex: number;
  isSelected: boolean;
  onClick: () => void;
}

const SectionItem: React.FC<SectionItemProps> = ({ section, sectionIndex, isSelected, onClick }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <Accordion
      expanded={expanded}
      sx={{
        "&:hover": {
          backgroundColor: "lightblue", // Change color on hover
        },
        ...(isSelected && {
          backgroundColor: "lightblue"
        })
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
            if (section.campus === "Online") {
              return <div>Online</div>;
            } else {
              return (
                <div key={meetingIndex}>
                  {Object.entries(meeting.times).map(([day, meetingTimes]) => (
                    <div key={day}>
                      {`${dayToString(parseInt(day))}: ` +
                        meetingTimes.map(
                          (time) =>
                            `${secondsToTime(time.start)} - ${secondsToTime(
                              time.end
                            )}`
                        )}
                    </div>
                  ))}
                </div>
              );
            }
          })}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default SectionItem;
