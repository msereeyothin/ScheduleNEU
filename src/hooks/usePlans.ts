import { useState, useMemo, useEffect } from "react";
import { CourseNode, SingleMeeting, plan } from "../common/types";

function usePlans() {
  const [plans, setPlans] = useState<plan[]>([
    {
      name: "Plan A",
      courses: [],
      singleMeetings: [],
    },
    {
      name: "Plan B",
      courses: [],
      singleMeetings: [],
    },
  ]);
  const [plan, setPlan] = useState<plan>(plans[0]);

  const [courses, setCourses] = useState<CourseNode[]>([]);
  const [singleMeetings, setSingleMeetings] = useState<SingleMeeting[]>([]);

  const memoizedCourses = useMemo(() => courses, [courses]);
  const memoizedSingleMeetings = useMemo(
    () => singleMeetings,
    [singleMeetings]
  );

  useEffect(() => {
    if (
      JSON.stringify(plan.courses) !== JSON.stringify(memoizedCourses) ||
      JSON.stringify(plan.singleMeetings) !==
        JSON.stringify(memoizedSingleMeetings)
    ) {
      setPlan((prevPlan) => ({
        ...prevPlan,
        courses: memoizedCourses,
        singleMeetings: memoizedSingleMeetings,
      }));
    }
  }, [memoizedCourses, memoizedSingleMeetings]);

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

  useEffect(() => {
    setCourses(plan.courses);
    setSingleMeetings(plan.singleMeetings);
  }, [plan]);

  return {
    plans,
    plan,
    setPlan,
    courses,
    setCourses,
    singleMeetings,
    setSingleMeetings,
  };
}

export default usePlans;
