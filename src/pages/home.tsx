import AddCourseModal from "../components/AddCourse/AddCourseModal";
import React from "react";
import { CourseNode, SingleMeeting } from "../common/types";
import CourseDropdown from "../components/Course/CourseDropdown";
import SidebarContainer from "../components/Sidebar/SidebarContainer";
import { Box } from "@mui/material";
import Schedule from "../components/Schedule/Schedule";

function Home() {
  const [courseList, setCourseList] = React.useState<CourseNode[]>([]);
  const [singleMeetingList, setSingleMeetingList] = React.useState<
    SingleMeeting[]
  >([]);
  const [hoverSingleMeeting, setHoverSingleMeeting] = React.useState<
    SingleMeeting[]
  >([]);

  return (
    <Box>
      <SidebarContainer>
        {courseList.map((course) => {
          return (
            <CourseDropdown
              setSingleMeetings={setSingleMeetingList}
              setHoverSingleMeeting={setHoverSingleMeeting}
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
        <Schedule singleMeetings={singleMeetingList} hoverSingleMeeting={hoverSingleMeeting}></Schedule>
      </Box>
    </Box>
  );
}

export default Home;
