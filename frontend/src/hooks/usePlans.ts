import { planAPI } from "../api/plans.api";
import { Course, Plan, Section } from "../common/types";
import React from "react";

function usePlans() {
  const [plans, setPlans] = React.useState<Plan[]>([]);

  React.useEffect(() => {
    const uuid = localStorage.getItem("uuid");
    if (uuid) {
      planAPI
        .fetchPlans(uuid)
        .then((fetchedPlans) => {
          setPlans(fetchedPlans);
          if (fetchedPlans.length > 0) {
            setPlan(fetchedPlans[0]);
          }
        })
        .catch((error) => {
          console.error("Failed to fetch plans", error);
        });
    }
  }, []);

  function addPlan(plan: Plan) {
    const uuid = localStorage.getItem("uuid");
    planAPI
      .addPlan(uuid, plan)
      .then((plan) => {
        console.log("Plan added with ID:", plan._id);
        setPlans((prevPlans) => [...prevPlans, plan]);
      })
      .catch((error) => {
        console.error("Failed to add plan", error);
        setPlans((prevPlans) => [...prevPlans, plan]);
      });
  }

  function removePlan(plan: Plan) {
    const uuid = localStorage.getItem("uuid");
    if (!uuid) {
      console.error("UUID not found");
      return;
    }
    planAPI
      .deletePlans(uuid, plan._id)
      .then(() => {
        setPlans((prevPlans) => prevPlans.filter((p) => p._id !== plan._id));
        console.log("Plan removed with ID:", plan._id);
      })
      .catch((error) => {
        console.error("Failed to delete plan", error);
        setPlans((prevPlans) =>
          prevPlans.filter((prevPlan) => prevPlan._id !== plan._id)
        );
      });
  }

  function updatePlans(updatedPlan: Plan) {
    console.log("Updating plan with ID:", updatedPlan._id);
    if (!updatedPlan._id) {
      console.error("Updated plan has no ID:", updatedPlan);
      return;
    }

    const uuid = localStorage.getItem("uuid");
    if (!uuid) {
      console.error("UUID not found");
      return;
    }

    planAPI
      .updatePlan(uuid, updatedPlan._id, updatedPlan)
      .then((plan) => {
        console.log("plan id:", plan._id);
        setPlans((prevPlans) =>
          prevPlans.map((plan) =>
            plan._id === updatedPlan._id ? updatedPlan : plan
          )
        );
      })
      .catch((error) => {
        console.error("Failed to update plan", error);
        setPlans((prevPlans) =>
          prevPlans.map((plan) =>
            plan._id === updatedPlan._id ? updatedPlan : plan
          )
        );
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
    setPlan((oldPlan) => {
      const newPlan = {
        ...oldPlan,
        courses: [...oldPlan.courses, course],
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
      return newPlan;
    });
  }

  function addSection(section: Section) {
    setPlan((oldPlan) => {
      const newPlan = {
        ...oldPlan,
        sections: [...oldPlan.sections, section],
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

  function updateSection(newSection: Section, oldSection: Section) {
    setPlan((oldPlan) => {
      let newSections = oldPlan.sections.filter(
        (section) => section.crn !== oldSection.crn
      );

      newSections = [...newSections, newSection];

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
    updateSection,
  };
}

export default usePlans;
