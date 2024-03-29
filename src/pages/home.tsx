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

  const [hoverSection, setHoverSection] = React.useState<Section[]>([]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", height: "50vw" }}>
      <SidebarContainer>
        <PlanInfoDisplay
          plan={plan}
          handleRemovePlan={handleRemovePlan}
          setPlanName={setPlanName}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {plan.courses.map((course) => {
            return (
              <CourseDropdown
                setHoverSection={setHoverSection}
                plan={plan}
                course={course}
                removeCourse={removeCourse}
                addSection={addSection}
                removeSection={removeSection}
              ></CourseDropdown>
            );
          })}
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
