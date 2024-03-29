import { Section } from "../../common/types";
import { Box } from "@mui/material";
import { dayToString } from "../../common/utils";
import { secondsToTime } from "../../common/utils";
import WeekDisplay from "./MeetingDisplay/WeekDisplay";

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
        <Box sx={{paddingTop: 1}}>
        <WeekDisplay section={section}></WeekDisplay>
        </Box>
      </Box>
    </div>
  );
};

export default SectionItem;
