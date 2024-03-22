import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function TopBar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" component="div">
          ScheduleNEU Logo
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
