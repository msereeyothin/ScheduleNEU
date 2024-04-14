import { addPlanApi, deletePlanApi, updatePlanApi } from "../api/plansAPI";
import { Course, Plan, Section } from "../common/types";
import React from "react";

function usePlans() {
  const [plans, setPlans] = React.useState<Plan[]>([]);

  function addPlan(plan: Plan) {
    const uuid = localStorage.getItem('uuid');
    addPlanApi(uuid, plan).then(newPlan => {
      console.log("Plan added with ID:", newPlan._id);
      setPlans(prevPlans => [...prevPlans, newPlan]);
    }).catch(error => {
      console.error('Failed to add plan', error);
    });
  }

  function removePlan(plan: Plan) {
    setPlans((prevPlans) =>
      prevPlans.filter((prevPlan) => prevPlan._id !== plan._id)
    );
  }

  function updatePlans(updatedPlan: Plan) {
    console.log("Updating plan with ID:", updatedPlan._id);
    if (!updatedPlan._id) {
      console.error("Updated plan has no ID:", updatedPlan);
      return;
    }

    const uuid = localStorage.getItem('uuid');
    if (!uuid) {
      console.error('UUID not found');
      return;
    }

    updatePlanApi(uuid, updatedPlan._id, updatedPlan).then(response => {
      console.log("plan id:", plan._id);
      setPlans((prevPlans) =>
        prevPlans.map((plan) => (plan._id === updatedPlan._id ? response : plan))
      );
    }).catch(error => {
      console.error('Failed to update plan', error);
    });
  }







  const emptyPlan: Plan = {
    _id: "",
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
