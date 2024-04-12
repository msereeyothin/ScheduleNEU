import { AppBar, Toolbar, Typography } from "@mui/material";

function TopBar() {
  return (
    <AppBar position="relative" color="inherit">
      <Toolbar>
        <Typography variant="h1">Schedule</Typography>
        <Typography variant="h1" color="primary">
          NEU
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
