import React from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { Box } from "@mui/material";
import { SortableItem } from "./SortableItem";
import { arrayMove } from "../../utils/utils";
import { UniqueIdentifier } from "@dnd-kit/core";
import { Course, Plan, Section } from "../../utils/types";
import CourseDropdown from "./CourseDropdown";
import { Dispatch, SetStateAction } from "react";

interface DraggableCoursesProps {
  plan: Plan;
  setPlan: (plan: Plan) => void;
  setHoverSection: Dispatch<SetStateAction<Section[]>>;
  removeCourse: (course: Course) => void;
  addSection: (section: Section) => void;
  removeSection: (section: Section) => void;
  updateSection: (newSection: Section, oldSection: Section) => void;
}

function DraggableCourses({
  plan,
  setPlan,
  setHoverSection,
  removeCourse,
  addSection,
  updateSection,
  removeSection,
}: DraggableCoursesProps) {
  function handleDragEnd(event: {
    active: { id: UniqueIdentifier };
    over: { id: UniqueIdentifier } | null;
  }) {
    const { active, over } = event;

    if (over?.id && active.id !== over.id) {
      const oldIndex = plan.courses.findIndex(
        (course) => course.classId === active.id.toString()
      );
      const newIndex = plan.courses.findIndex(
        (course) => course.classId === over.id.toString()
      );

      if (oldIndex !== -1 && newIndex !== -1) {
        setPlan({
          ...plan,
          courses: arrayMove(plan.courses, oldIndex, newIndex),
        });
      }
    }
  }
  return (
    <Box sx={{ width: "100%" }}>
      <DndContext
        sensors={useSensors(
          useSensor(PointerSensor),
          useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
          })
        )}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={plan.courses.map((course) => course.classId)}
          strategy={verticalListSortingStrategy}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {plan.courses.map((course) => (
              <SortableItem key={course.classId} id={course.classId}>
                {(dragHandleProps) => (
                  <CourseDropdown
                    setHoverSection={setHoverSection}
                    plan={plan}
                    course={course}
                    removeCourse={removeCourse}
                    addSection={addSection}
                    removeSection={removeSection}
                    updateSection={updateSection}
                    dragHandleProps={dragHandleProps}
                  />
                )}
              </SortableItem>
            ))}
          </Box>
        </SortableContext>
      </DndContext>
    </Box>
  );
}

export default DraggableCourses;
