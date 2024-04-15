import React from "react";
import { AppBar, Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "../../assets/ScheduleNU_Logo_01_Artboard_2.svg";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <AppBar position="relative" color="inherit" sx={{ minHeight: "75px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          padding: 1.5,
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "1%",
            }}
          >
            <img
              src={Logo}
              alt="ScheduleNEU Logo"
              style={{ height: "70px", marginRight: "5px" }}
            />
            <Typography variant="h1">Schedule</Typography>
            <Typography variant="h1" color="primary">
              NEU
            </Typography>
          </Box>
        </Link>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "6%",
            marginRight: "4%",
          }}
        >
          <IconButton
            size="large"
            color="secondary"
            aria-label="about"
            href="/about"
            target="_blank"
          >
            <InfoIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="github"
            href="https://github.com/msereeyothin/ScheduleNu"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
}

export default TopBar;
