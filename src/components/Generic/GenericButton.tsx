import React from "react";
import { Button } from "@mui/material";

const style = {
  borderRadius: "12px",
  width: "100%",
  height: "100%",
};

type ButtonVariant = "contained" | "outlined" | "text";

type Color =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

function GenericButton({
  children,
  onClick,
  disabled = false,
  variant = "contained",
  color = "primary",
}: {
  children?: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  color?: Color;
}) {
  return (
    <>
      <Button
        onClick={onClick}
        sx={style}
        variant={variant}
        disabled={disabled}
        color={color}
      >
        {children}
      </Button>
    </>
  );
}

export default GenericButton;
