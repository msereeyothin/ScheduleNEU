import AddCourseModal from "../components/Course/AddCourse/AddCourseModal";
import React from "react";
import { Section } from "../common/types";
import CourseDropdown from "../components/Course/CourseDropdown";
import SidebarContainer from "../components/Layout/SidebarContainer";
import { Box } from "@mui/material";
import Schedule from "../components/Schedule/Schedule";
import usePlans from "../hooks/usePlans";
import AddPlanModal from "../components/Plan/AddPlanModal";
import SelectPlan from "../components/Plan/SelectPlan";
import PlanInfoDisplay from "../components/Plan/PlanInfoDisplay";
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
  useSortable,
  AnimateLayoutChanges,
} from "@dnd-kit/sortable";
import { SortableItem } from "../components/Course/SortableItem";
import { arrayMove } from "../common/utils";
import { UniqueIdentifier } from "@dnd-kit/core";

function Home() {
  const {
    plan,
    plans,
    addPlan,
    removePlan,
    emptyPlan,
    setPlan,
    setPlanName,
    addCourse,
    removeCourse,
    addSection,
    removeSection,
  } = usePlans();

  function handleRemovePlan() {
    removePlan(plan);
    setPlan(emptyPlan);
  }

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

  const [hoverSection, setHoverSection] = React.useState<Section[]>([]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", height: "50vw" }}>
      <SidebarContainer>
        <PlanInfoDisplay
          plan={plan}
          handleRemovePlan={handleRemovePlan}
          setPlanName={setPlanName}
        />
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
                          dragHandleProps={dragHandleProps}
                        />
                      )}
                    </SortableItem>
                  ))}
              </Box>
            </SortableContext>
          </DndContext>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 2,
          }}
        >
          {plan.isEmpty ? (
            <></>
          ) : (
            <AddCourseModal
              campus={plan.campus}
              term={plan.term}
              addCourse={addCourse}
              existingCourses={plan.courses}
            ></AddCourseModal>
          )}
        </Box>
      </SidebarContainer>
      <Box sx={{ padding: 2 }}>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            direction: "row",
            paddingBottom: 2,
            paddingTop: 1,
          }}
        >
          <SelectPlan plan={plan} plans={plans} setPlan={setPlan}></SelectPlan>
          <Box sx={{ marginLeft: 1 }}>
            <AddPlanModal addPlan={addPlan} setPlan={setPlan}></AddPlanModal>
          </Box>
        </Box>
        <Box sx={{ width: "75vw" }}>
          <Schedule
            sections={plan.sections}
            hoverSections={hoverSection}
          ></Schedule>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
