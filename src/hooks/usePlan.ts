import { Course, Plan, Section } from "../common/types";
import React from "react";

function usePlan() {
  const emptyPlan: Plan = {
    name: "No Plan Selected",
    term: "202430",
    isEmpty: true,
    campus: "Boston",
    courses: [],
    sections: [],
  };
  const [plan, setPlan] = React.useState<Plan>(emptyPlan);

  function addCourse(course: Course) {
    setPlan((oldPlan: Plan) => {
      const newCourses = oldPlan.courses;
      newCourses.push(course);
      return {
        ...oldPlan,
        courses: newCourses,
      };
    });
  }

  function removeCourse(course: Course) {
    setPlan((oldPlan: Plan) => {
      let newCourses = oldPlan.courses;
      newCourses = newCourses.filter(
        (oldCourse) => oldCourse.name !== course.name
      );
      return {
        ...oldPlan,
        courses: newCourses,
      };
    });
  }

  function addSection(section: Section) {
    setPlan((oldPlan: Plan) => {
      const newSections = oldPlan.sections;
      newSections.push(section);
      return {
        ...oldPlan,
        sections: newSections,
      };
    });
  }

  function removeSection(section: Section) {
    setPlan((oldPlan: Plan) => {
      let newSections = oldPlan.sections;
      newSections = newSections.filter(
        (oldSection) => JSON.stringify(oldSection) !== JSON.stringify(section)
      );
      return {
        ...oldPlan,
        sections: newSections,
      };
    });
  }
  return {
    plan,
    emptyPlan,
    setPlan,
    addCourse,
    removeCourse,
    addSection,
    removeSection,
  };
}

export default usePlan;
