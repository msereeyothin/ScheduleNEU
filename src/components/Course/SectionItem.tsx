import { Section } from "../../common/types";
import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { dayToString } from "../../common/types";
import { secondsToTime } from "../../common/utils";

interface SectionItemProps {
  section: Section;
  sectionIndex: number;
}

const SectionItem: React.FC<SectionItemProps> = ({ section, sectionIndex }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={toggleExpanded}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        Section {sectionIndex + 1}
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {section.meetings.map((meeting, meetingIndex) => (
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
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default SectionItem;
