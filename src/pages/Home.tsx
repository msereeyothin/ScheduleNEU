/* eslint-disable react-hooks/rules-of-hooks */
import AddCourseModal from "../components/Course/AddCourse/AddCourseModal";
import React, { useEffect } from "react";
import { Section, UserData } from "../common/types";
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
} from "@dnd-kit/sortable";
import { SortableItem } from "../components/Course/SortableItem";
import { arrayMove } from "../common/utils";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useUserSession } from '../hooks/useUserSession';
import DraggableCourses from "../components/Course/DraggableCourses";




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
    updateSection,
  } = usePlans();

  const userData = useUserSession() as UserData | null;


  useEffect(() => {
    console.log("User Data:", userData);
    if (userData && userData.plans.length > 0) {
      setPlan(userData.plans[0]);
    }
  }, [userData, setPlan]);

  function handleRemovePlan() {
    removePlan(plan);
    setPlan(emptyPlan);
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
        <DraggableCourses
          plan={plan}
          setPlan={setPlan}
          setHoverSection={setHoverSection}
          removeCourse={removeCourse}
          addSection={addSection}
          updateSection={updateSection}
          removeSection={removeSection}
        ></DraggableCourses>
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
        <Box sx={{ width: "70vw" }}>
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
