import Axios, { AxiosInstance } from "axios";
import { CourseNode } from "../common/types";

class SearchAPIClient {
  private axios: AxiosInstance;

  constructor(baseURL = "https://api.searchneu.com/graphql") {
    this.axios = Axios.create({ baseURL: baseURL });
  }
  searchCourses = async (
    searchQuery: string,
    termId: string,
    first = 50
  ): Promise<CourseNode[]> => {
    const res = await this.axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        query: `
          {
            search(termId:"${termId}", query: "${searchQuery}", first: ${first}) {
              nodes { ... on ClassOccurrence { name subject classId sections { meetings }
              }
            }
          }
        }`,
      }),
    });
    const coursesData = await res.data;
    const nodes = coursesData?.data?.search?.nodes ?? [];

    const courses = nodes.map((node: CourseNode) => {
      const { name, subject, classId, sections } = node;
      return {
        name,
        subject,
        classId,
        sections,
      };
    }) as CourseNode[];

    return courses;
  };
}

export const SearchAPI = new SearchAPIClient();
