import React from "react";
import { Button } from "@mui/material";

const style = {
  borderRadius: "12px",
  width: "100%",
  height: "100%"
};

type ButtonVariant = "contained" | "outlined" | "text";

function GenericButton({
  children,
  onClick,
  variant = "contained",
}: {
  children?: React.ReactNode;
  onClick: () => void;
  variant?: ButtonVariant;
}) {
  return (
    <>
      <Button onClick={onClick} sx={style} variant={variant}>
        {children}
      </Button>
    </>
  );
}

export default GenericButton;
