/* eslint-disable react-hooks/rules-of-hooks */
import AddCourseModal from "../components/Course/AddCourse/AddCourseModal";
import React, { useEffect } from "react";
import { Section, UserData } from "../common/types";
import { Box, useTheme } from "@mui/material";
import Schedule from "../components/Schedule/Schedule";
import usePlans from "../hooks/usePlans";
import AddPlanModal from "../components/Plan/AddPlanModal";
import SelectPlan from "../components/Plan/SelectPlan";
import PlanInfoDisplay from "../components/Plan/PlanInfoDisplay";
import { useUserSession } from "../hooks/useUserSession";
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
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "row", height: "90vh" }}>
      {/* Sidebar with courses */}
      <Box
        sx={{
          padding: 3,
          overflow: "auto",
          width: "100%",
          backgroundColor: theme.palette.background.default,
        }}
      >
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
      </Box>
      <Box sx={{ padding: 2 }}>
        {/* Plan Controls */}
        <Box
          sx={{
            width: "40%",
            height: "5vh",
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
        {/* Schedule */}
        <Box sx={{ width: "70vw", maxHeight: "80vh" }}>
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
