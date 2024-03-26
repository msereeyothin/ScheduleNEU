import { Section } from "../../common/types";
import { Box } from "@mui/material";
import { dayToString } from "../../common/types";
import { secondsToTime } from "../../common/utils";

interface SectionItem2Props {
  section: Section;
  name: string;
  sectionIndex: number;
  isSelected: boolean;
  onClick: () => void;
  setHoverSection: React.Dispatch<React.SetStateAction<Section[]>>;
}

const SectionItem: React.FC<SectionItem2Props> = ({
  section,
  name,
  sectionIndex,
  isSelected,
  onClick,
  setHoverSection,
}) => {
  const style = {
    outline: "solid grey 2px",
    "&:hover": {
      backgroundColor: "lightblue", // Change color on hover
    },
    ...(isSelected && {
      backgroundColor: "lightblue", // Stay highlighted on select
    }),
    borderRadius: "10px",
    marginBottom: "10px",
    padding: 1,
  };

  const handleOnHover = (section: Section) => {
    setHoverSection([section]);
  };
  const handleMouseLeave = () => {
    setHoverSection([]);
  };

  return (
    <div
      onMouseOver={() => handleOnHover(section)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <Box sx={style}>
        Section {sectionIndex + 1}: {section.campus}
        <div>
          {section.meetings.map((meeting, meetingIndex) => {
            return (
              <div>
                <>
                  <div key={meetingIndex}>
                    {Object.entries(meeting.times).map(
                      ([day, meetingTimes]) => (
                        <div key={day}>
                          {`${dayToString(parseInt(day))}: ` +
                            meetingTimes.map(
                              (time) =>
                                `${secondsToTime(time.start)} - ${secondsToTime(
                                  time.end
                                )}`
                            )}
                        </div>
                      )
                    )}
                  </div>
                </>
              </div>
            );
          })}
        </div>
      </Box>
    </div>
  );
};

export default SectionItem;
