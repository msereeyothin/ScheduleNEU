import React from "react";
import { AppBar, Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "../../assets/ScheduleNEULogo.svg";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();
  return (
    <AppBar position="relative" color="inherit" sx={{ minHeight: "10vh" }}>
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
            onClick={() => navigate("/")}
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
            onClick={() => navigate("/about")}
          >
            <InfoIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="github"
            href="https://github.com/msereeyothin/ScheduleNEU"
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
