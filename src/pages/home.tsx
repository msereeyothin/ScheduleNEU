import AddCourseModal from "../components/AddCourse/AddCourseModal";
import React from "react";
import { SingleMeeting } from "../common/types";
import CourseDropdown from "../components/Course/CourseDropdown";
import SidebarContainer from "../components/Sidebar/SidebarContainer";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Schedule from "../components/Schedule/Schedule";
import TopBar from "../components/TopBar/TopBar";
import { SelectChangeEvent } from "@mui/material";
import usePlans from "../hooks/usePlans";

function Home() {
  const {
    plans,
    plan,
    setPlan,
    courses,
    setCourses,
    singleMeetings,
    setSingleMeetings,
  } = usePlans();
  const [hoverSingleMeeting, setHoverSingleMeeting] = React.useState<
    SingleMeeting[]
  >([]);

  const handlePlanChange = (event: SelectChangeEvent) => {
    let planName = event.target.value as string;
    let curPlan = plans.find((plan) => plan.name === planName);
    if (curPlan) {
      setPlan(curPlan);
    } else {
      console.error(`Plan "${planName}" not found.`);
    }
  };

  return (
    <Box>
      <TopBar></TopBar>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <SidebarContainer>
          {plan.courses.map((course) => {
            return (
              <CourseDropdown
                setSingleMeetings={setSingleMeetings}
                setHoverSingleMeeting={setHoverSingleMeeting}
                courseList={courses}
                course={course}
                setCourseList={setCourses}
              ></CourseDropdown>
            );
          })}
          <AddCourseModal
            courseList={courses}
            setCourseList={setCourses}
          ></AddCourseModal>
        </SidebarContainer>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h3">Plans go here</Typography>
          <Box>
            <FormControl fullWidth>
              <InputLabel>Select Plan</InputLabel>
              <Select
                value={plan.name}
                label="Plan"
                onChange={handlePlanChange}
              >
                {plans.map((plan) => (
                  <MenuItem value={plan.name}> {plan.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ width: "75vw" }}>
            <Schedule
              singleMeetings={singleMeetings}
              hoverSingleMeeting={hoverSingleMeeting}
            ></Schedule>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
