import AddCourseModal from "../components/AddCourse/AddCourseModal";
import React from "react";
import { CourseNode } from "../common/types";
import CourseDropdown from "../components/Course/CourseDropdown";
import SidebarContainer from "../components/Sidebar/SidebarContainer";
import { alreadyExists } from "../common/utils";
import CenterContainer from "../components/Center/CenterContainer";

function Home() {
  const [courseList, setCourseList] = React.useState<CourseNode[]>([]);

  const handleAddCourse = (course: CourseNode) => {
    setCourseList((prevCourseList) => [...prevCourseList, course]);
    console.log(courseList);
  };

  const handleRemoveCourse = (course: CourseNode) => {
    setCourseList((prevCourseList: CourseNode[]) =>
      prevCourseList.filter((c: CourseNode) => c.classId !== course.classId)
    );
    console.log(courseList);
  };
  return (
    <div style ={{ display: "flex" }}>
      <SidebarContainer>
        <div>
          <AddCourseModal
            termId=""
            courseList={courseList}
            handleAdd={handleAddCourse}
            handleRemove={handleRemoveCourse}
          ></AddCourseModal>
        </div>
        {courseList.map((course) => {
          return (
            <CourseDropdown
              course={course}
              alreadyExists={alreadyExists(course, courseList)}
              handleAdd={handleAddCourse}
              handleRemove={handleRemoveCourse}
            ></CourseDropdown>
          );
        })}
      </SidebarContainer>
      <CenterContainer>
        NUSchedule
      </CenterContainer>
    </div>
  );
}

export default Home;
