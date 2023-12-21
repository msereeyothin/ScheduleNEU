import useSWR from "swr";
import { CourseNode } from "../common/types";
import { SearchAPI } from "../api";

type SearchCoursesReturn = {
  courses?: CourseNode[];
  error: boolean;
  isLoading: boolean;
};

export function useSearchCourses(
  searchQuery: string,
  termId: string
): SearchCoursesReturn {
  const { data, error, isLoading } = useSWR(
    `/searchCourses/${searchQuery}/${termId}
        }`,
    async () => await SearchAPI.searchCourses(searchQuery.trim(), termId)
  );

  return {
    courses: data ? data : [],
    error: error,
    isLoading: isLoading,
  };
}
