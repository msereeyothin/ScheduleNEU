import { Box } from "@mui/material";
import { ReactNode } from "react";

interface SidebarContainerProps {
  children: ReactNode;
}

const SidebarContainer: React.FC<SidebarContainerProps> = ({ children }) => {
  return (
    <Box
      component="aside"
      className="w-1/4 bg-red-400 p-3 fixed top-0 left-0 bottom-0 flex flex-col items-center justify-between overflow-auto"
    >
      <div style={{position: "fixed", top: "60px"}} >{children}</div>
    </Box>
  );
};

export default SidebarContainer;
