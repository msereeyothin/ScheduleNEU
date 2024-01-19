import { Box, Drawer } from "@mui/material";
import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";

interface SidebarContainerProps {
  children: ReactNode;
}

const SidebarContainer: React.FC<SidebarContainerProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Drawer
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          padding: 3,
          gap: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "auto",
          height: "100%",
          width: '25vw',
          backgroundColor: theme.palette.background.default,
        }}
      >
        {children}
      </Box>
    </Drawer>
  );
};

export default SidebarContainer;
