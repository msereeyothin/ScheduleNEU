import AddCourseModal from "../components/AddCourse/AddCourseModal";
import React from "react";
import { CourseNode } from "../common/types";
import CourseDropdown from "../components/Course/CourseDropdown";
import SidebarContainer from "../components/Sidebar/SidebarContainer";
import { Box, Container, Drawer, Typography } from "@mui/material";

function Home() {
  const [courseList, setCourseList] = React.useState<CourseNode[]>([]);

  return (
    <Box>
      <SidebarContainer>
        {courseList.map((course) => {
          console.log(course);
          return (
            <CourseDropdown
              courseList={courseList}
              course={course}
              setCourseList={setCourseList}
            ></CourseDropdown>
          );
        })}
        <AddCourseModal
          courseList={courseList}
          setCourseList={setCourseList}
        ></AddCourseModal>
      </SidebarContainer>
      <Box style={{ marginLeft: "25vw" }}>
        <div>Scheduling Area</div>
      </Box>
    </Box>
  );
}

export default Home;
