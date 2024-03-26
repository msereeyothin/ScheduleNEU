import { useState, useMemo, useEffect } from "react";
import { Course, Plan, Section } from "../common/types";
import { addPlan } from "../api/localStorage.api";

function usePlans() {
  const [plans, setPlans] = useState<Plan[]>([
    {
      name: "Plan A",
      campus: "Boston",
      courses: [],
      sections: [],
    },
    {
      name: "Plan B",
      campus: "Online",
      courses: [],
      sections: [],
    },
  ]);
  const [plan, setPlan] = useState<Plan>(plans[0]);

  const [courses, setCourses] = useState<Course[]>([]);
  const [sections, setSections] = useState<Section[]>([]);

  const memoizedCourses = useMemo(() => courses, [courses]);
  const memoizedSections = useMemo(
    () => sections,
    [sections]
  );

  // Update the state of plan if they change
  useEffect(() => {
    if (
      JSON.stringify(plan.courses) !== JSON.stringify(memoizedCourses) ||
      JSON.stringify(plan.sections) !==
        JSON.stringify(memoizedSections)
    ) {
      setPlan((prevPlan) => ({
        ...prevPlan,
        courses: memoizedCourses,
        singleMeetings: memoizedSections,
      }));
    }
  }, [memoizedCourses, memoizedSections]);

  // Update the list of plans when a signle plan changes
  useEffect(() => {
    setPlans((prevPlans) => {
      const newPlans = [...prevPlans];
      let index = newPlans.findIndex((prevPlan) => prevPlan.name === plan.name);
      if (index !== -1) {
        newPlans[index] = plan;
      }
      return newPlans;
    });
  }, [plan]);

  // Update the courses and singlemeetings when the plans change
  useEffect(() => {
    setCourses(plan.courses);
    setSections(plan.sections);
  }, [plan]);

  const addPlan = (newPlan: Plan) => {
    setPlans((prevPlans) => [...prevPlans, newPlan]);
  };

  return {
    plans,
    plan,
    setPlan,
    addPlan,
    courses,
    setCourses,
    sections,
    setSections,
  };
}

export default usePlans;
