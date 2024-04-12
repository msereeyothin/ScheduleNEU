import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import Logo from "../../assets/ScheduleNU_Logo_01_Artboard_2.svg";
import InfoIcon from '@mui/icons-material/Info';

function TopBar() {
  return (
    <AppBar position="relative" color="inherit">
      <Toolbar>
        <Typography variant="h1">Schedule</Typography>
        <Typography variant="h1" color="primary">
          NEU
        </Typography>
        <IconButton
          color="inherit"
          aria-label="about"
          href="/about"
          target="_blank"
          style={{
            fontSize: '46px',
            position: 'relative',
            top: '2px',
          }}
        >
          <InfoIcon style={{ fontSize: 'inherit' }} />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="github"
          href="https://github.com/msereeyothin/ScheduleNu"
          target="_blank"
          style={{ fontSize: '40px' }}
        >
          <GitHubIcon style={{ fontSize: 'inherit' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
