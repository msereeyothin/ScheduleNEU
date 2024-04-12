import React from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { Box } from "@mui/material";

interface SortableItemProps {
  id: string;
  children: (props: DragHandleProps) => React.ReactNode;
}

interface DragHandleProps {
  listeners: any;
  attributes: any;
  setNodeRef: any;
}

export function SortableItem({ id, children }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: "100%",
  };

  // Pass listeners, attributes, and setNodeRef as a single object
  return (
    <Box ref={setNodeRef} sx={style}>
      {children({ listeners, attributes, setNodeRef })}
    </Box>
  );
}
