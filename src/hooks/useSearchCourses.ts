import useSWR from "swr";
import { Course, Campus } from "../common/types";
import { SearchAPI } from "../api/search.api";

type SearchCoursesReturn = {
  courses?: Course[];
  error: boolean;
  isLoading: boolean;
};

export function useSearchCourses(
  searchQuery: string,
  termId: string,
  campus: Campus
): SearchCoursesReturn {
  const { data, error, isLoading } = useSWR(
    `/searchCourses/${searchQuery}/${termId}
        }`,
    async () => await SearchAPI.searchCourses(searchQuery.trim(), termId)
  );
  const courses = data ? data : [];

  courses.forEach((course) => {
    // Filter out sections with wrong campus
    course.sections = course.sections.filter(
      (section) => section.campus === campus || section.campus === "Online"
    );
    // Filter out final exams
    course.sections.forEach((section) => {
      section.meetings = section.meetings.filter(
        (meeting) => meeting.type !== "Final Exam"
      );
      section.name = course.name;
    });
  });
  return {
    courses,
    error: error,
    isLoading: isLoading,
  };
}
