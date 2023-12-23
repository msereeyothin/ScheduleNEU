import { Box } from "@mui/material";
import { ReactNode } from "react";

interface CenterContainerProps {
  children: ReactNode;
}

const CenterContainer: React.FC<CenterContainerProps> = ({ children }) => {
  return (
    <Box
      component="aside"
      className="w-3/4 bg-pink-300 p-3 fixed top-0 left-100 right-0 bottom-0 flex flex-col items-center justify-between overflow-auto"
    >
      <div>{children}</div>
    </Box>
  );
};

export default CenterContainer;