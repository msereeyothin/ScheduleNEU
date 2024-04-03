import { Section } from "../../common/types";
import { Box } from "@mui/material";
import WeekDisplay from "./MeetingDisplay/WeekDisplay";

interface SectionItemProps {
  section: Section;
  name: string;
  sectionIndex: number;
  isSelected: boolean;
  onClick: () => void;
  setHoverSection: React.Dispatch<React.SetStateAction<Section[]>>;
}

const SectionItem: React.FC<SectionItemProps> = ({
  section,
  sectionIndex,
  isSelected,
  onClick,
  setHoverSection,
}) => {
  const style = {
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    "&:hover": {
      backgroundColor: "lightblue",
    },
    ...(isSelected && {
      backgroundColor: "lightblue",
    }),
    borderRadius: "10px",
    marginBottom: "10px",
    padding: 1.5,
  };

  const handleOnHover = (section: Section) => {
    if (!isSelected) {
      setHoverSection([section]);
    }
  };
  const handleMouseLeave = () => {
    setHoverSection([]);
  };

  const handleClick = () => {
    onClick();
    handleMouseLeave();
  };

  return (
    <div
      onMouseOver={() => handleOnHover(section)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Box sx={style}>
        Section {sectionIndex + 1}: {section.campus}
        <Box sx={{ paddingTop: 1 }}>
          <WeekDisplay section={section}></WeekDisplay>
        </Box>
      </Box>
    </div>
  );
};

export default SectionItem;
