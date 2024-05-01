import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

function Layout() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <TopBar></TopBar>
      <Outlet />
    </Box>
  );
}

export default Layout;
