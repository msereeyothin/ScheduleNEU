import { Course, Plan, Section } from "../common/types";
import React from "react";

function usePlans() {
  const [plans, setPlans] = React.useState<Plan[]>([]);

  function addPlan(plan: Plan) {
    setPlans((prevPlans) => [...prevPlans, plan]);
  }

  function removePlan(plan: Plan) {
    setPlans((prevPlans) =>
      prevPlans.filter((prevPlan) => prevPlan.id !== plan.id)
    );
  }

  function updatePlans(updatedPlan: Plan) {
    setPlans((prevPlans) =>
      prevPlans.map((plan) => (plan.id === updatedPlan.id ? updatedPlan : plan))
    );
  }

  const emptyPlan: Plan = {
    id: "",
    name: "No Plan Selected",
    term: "202430",
    isEmpty: true,
    campus: "Boston",
    courses: [],
    sections: [],
  };
  const [plan, setPlan] = React.useState<Plan>(emptyPlan);

  function setPlanName(name: string) {
    setPlan((oldPlan: Plan) => {
      const newPlan = {
        ...oldPlan,
        name: name,
      };
      updatePlans(newPlan);
      return newPlan;
    });
  }

  function addCourse(course: Course) {
    setPlan((oldPlan: Plan) => {
      const newCourses = oldPlan.courses;
      newCourses.push(course);
      const newPlan = {
        ...oldPlan,
        courses: newCourses,
      };
      updatePlans(newPlan);
      return newPlan;
    });
  }

  function removeCourse(course: Course) {
    setPlan((oldPlan: Plan) => {
      let newCourses = oldPlan.courses;
      newCourses = newCourses.filter(
        (oldCourse) => oldCourse.name !== course.name
      );
      const newPlan = {
        ...oldPlan,
        courses: newCourses,
      };
      updatePlans(newPlan);
      return newPlan;
    });
  }

  function addSection(section: Section) {
    setPlan((oldPlan: Plan) => {
      const newSections = oldPlan.sections;
      newSections.push(section);
      const newPlan = {
        ...oldPlan,
        sections: newSections,
      };
      updatePlans(newPlan);
      return newPlan;
    });
  }

  function removeSection(section: Section) {
    setPlan((oldPlan: Plan) => {
      let newSections = oldPlan.sections;
      newSections = newSections.filter(
        (oldSection) => oldSection.crn !== section.crn
      );
      const newPlan = {
        ...oldPlan,
        sections: newSections,
      };
      updatePlans(newPlan);
      return newPlan;
    });
  }
  return {
    plans,
    addPlan,
    removePlan,
    plan,
    emptyPlan,
    setPlanName,
    setPlan,
    addCourse,
    removeCourse,
    addSection,
    removeSection,
  };
}

export default usePlans;
