import AddCourseModal from "../components/Course/AddCourse/AddCourseModal";
import React from "react";
import { Section } from "../common/types";
import CourseDropdown from "../components/Course/CourseDropdown";
import SidebarContainer from "../components/Layout/SidebarContainer";
import { Box, Typography } from "@mui/material";
import Schedule from "../components/Schedule/Schedule";
import usePlans from "../hooks/usePlans";
import AddPlanModal from "../components/Plan/AddPlanModal";
import SelectPlan from "../components/Plan/SelectPlan";
import { termIdToString } from "../common/utils";

function Home() {
  const {
    plans,
    plan,
    setPlan,
    addPlan,
    courses,
    setCourses,
    sections,
    setSections,
  } = usePlans();
  const [hoverSection, setHoverSection] = React.useState<Section[]>([]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", height: "50vw" }}>
      <SidebarContainer>
        <Box sx={{ paddingBottom: 2 }}>
          <Typography variant="h2">{plan.name}</Typography>
          <Typography variant="subtitle1">
            {plan.campus} {termIdToString(plan.term)}
          </Typography>
        </Box>
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
                course={course}
                setSections={setSections}
                setHoverSection={setHoverSection}
                setCourseList={setCourses}
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
          <AddCourseModal
            campus={plan.campus}
            term={plan.term}
            addedCourses={courses}
            setAddedCourses={setCourses}
          ></AddCourseModal>
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
          <Schedule sections={sections} hoverSections={hoverSection}></Schedule>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
