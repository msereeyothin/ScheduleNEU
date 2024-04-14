import { Section } from "../../common/types";
import { Box, Tooltip } from "@mui/material";
import WeekDisplay from "./MeetingDisplay/WeekDisplay";
import PersonIcon from "@mui/icons-material/Person";

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

  const iconColor = section.seatsRemaining === 0 ? "warning" : "success";
  const tooltipTitle =
    section.seatsRemaining === 0 ? "No Seats Available!" : "Seats Available";

  return (
    <div
      onMouseOver={() => handleOnHover(section)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            Section {sectionIndex + 1}: {section.campus}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingTop: 1,
            justifyContent: "space-between",
          }}
        >
          <WeekDisplay section={section}></WeekDisplay>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Tooltip title={tooltipTitle} arrow>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <PersonIcon
                  color={iconColor}
                  sx={{ width: "20px", height: "20px" }}
                ></PersonIcon>
                {section.seatsRemaining}/{section.seatsCapacity}
              </Box>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SectionItem;
