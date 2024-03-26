import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

function Layout() {
  return (
    <Box>
      <TopBar></TopBar>
      <Outlet />
    </Box>
  );
}

export default Layout;
