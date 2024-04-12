import React from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

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
  };

  // Pass listeners, attributes, and setNodeRef as a single object
  return (
    <div ref={setNodeRef} style={style}>
      {children({ listeners, attributes, setNodeRef })}
    </div>
  );
}
