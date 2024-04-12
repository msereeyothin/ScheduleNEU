import React from "react";
import Fab from "@mui/material/Fab";
import RemoveIcon from "@mui/icons-material/Remove";

interface RemoveButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick }) => {
  return (
    <Fab
      size="small"
      onClick={onClick}
      sx={{ backgroundColor: "transparent", boxShadow: 0 }}
    >
      <RemoveIcon color="primary" sx={{ width: "25px", height: "25px" }} />
    </Fab>
  );
};

export default RemoveButton;
