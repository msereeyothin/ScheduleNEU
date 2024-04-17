import React from "react";
import { Modal, Box } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  maxHeight: "80vh",
  overflow: "auto",
  borderRadius: "15px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function GenericModal({
  children,
  open,
  onClose,
}: {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </>
  );
}

export default GenericModal;
