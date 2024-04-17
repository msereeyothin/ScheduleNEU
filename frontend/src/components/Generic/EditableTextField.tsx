import EditIcon from "@mui/icons-material/Edit";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";

function EditableTextField({
  name,
  setName,
}: {
  name: string;
  setName: (name: string) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [editing, setEditing] = useState(false);

  function handleEdit() {
    setName(name);
    setEditing(false);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === "Escape") && editing) {
      handleEdit();
    }
  };

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) => handleKeyPress(e)}
    >
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <>
          {editing ? (
            <div>
              <TextField
                value={name}
                variant="standard"
                onChange={handleChange}
                onBlur={handleEdit}
              />
            </div>
          ) : (
            <div onClick={() => setEditing(true)}>
              <Typography variant="h2" sx={{ wordBreak: "break-word" }}>
                {name}
              </Typography>
            </div>
          )}
          {editing ? (
            <IconButton onClick={handleEdit}>
              <CheckIcon></CheckIcon>
            </IconButton>
          ) : (
            <IconButton disabled={!hovered} onClick={() => setEditing(true)}>
              <EditIcon />
            </IconButton>
          )}
        </>
      </Box>
    </div>
  );
}

export default EditableTextField;
