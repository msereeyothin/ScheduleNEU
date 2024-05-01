/* eslint-disable react-hooks/rules-of-hooks */
import AddCourseModal from "../components/Course/AddCourse/AddCourseModal";
import React, { useEffect } from "react";
import { Section, UserData } from "../utils/types";
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
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      {/* Left sidebar with courses */}
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
      {/* Right side with plan controls and schedule. Height should not exceed 88vh */}
      <Box sx={{ height: "88vh" }}>
        {/* Plan Controls */}
        <Box
          sx={{
            padding: "2vh",
            paddingBottom: "0",
            display: "flex",
            direction: "row",
          }}
        >
          <SelectPlan plan={plan} plans={plans} setPlan={setPlan}></SelectPlan>
          <Box sx={{ marginLeft: "1vw" }}>
            <AddPlanModal addPlan={addPlan} setPlan={setPlan}></AddPlanModal>
          </Box>
        </Box>
        {/* Schedule */}
        <Box sx={{ width: "70vw", padding: "2vh" }}>
          <Schedule
            sections={plan.sections}
            hoverSections={hoverSection}
            height="74vh"
          ></Schedule>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
