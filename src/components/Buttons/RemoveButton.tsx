import React from "react";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";

interface RemoveButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick }) => {
  return (
    <Fab size="small" color="primary" aria-label="add" onClick={onClick}>
      <DeleteIcon />
    </Fab>
  );
};

export default RemoveButton;
