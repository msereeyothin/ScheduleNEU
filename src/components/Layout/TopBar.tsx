import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import Logo from "../../assets/ScheduleNU_Logo_01_Artboard_2.svg";
import InfoIcon from '@mui/icons-material/Info';

function TopBar() {
  return (
    <AppBar position="relative" style={{ minHeight: '85px' }}>
      <Toolbar>
        <img src={Logo} alt="ScheduleNEU Logo" style={{ height: 70, marginRight: 20 }} />
        <Typography
          variant="h6"
          component="div"
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontSize: '32px',
            fontWeight: '400',
            lineHeight: '50.37px',
            textAlign: 'left',
            flexGrow: 1,
            marginTop: '10px',
          }}
        >
          ScheduleNEU
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
