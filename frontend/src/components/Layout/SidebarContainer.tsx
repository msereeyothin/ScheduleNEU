import { Box } from "@mui/material";
import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";

interface SidebarContainerProps {
  children: ReactNode;
}

const SidebarContainer: React.FC<SidebarContainerProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: 3,
        gap: "10px",
        overflow: "auto",
        height: "100%",
        width: "100%",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {children}
    </Box>
  );
};

export default SidebarContainer;
