import Axios, { AxiosInstance } from "axios";
import { Course } from "../common/types";

class SearchAPIClient {
  private axios: AxiosInstance;

  constructor(baseURL = "https://api.searchneu.com/graphql") {
    this.axios = Axios.create({ baseURL: baseURL });
  }
  searchCourses = async (
    searchQuery: string,
    termId: string,
    first = 50
  ): Promise<Course[]> => {
    const res = await this.axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        query: `
          {
            search(termId:"${termId}", query: "${searchQuery}", first: ${first}) {
              nodes { ... on ClassOccurrence { name subject classId sections { meetings campus }
              }
            }
          }
        }`,
      }),
    });
    const coursesData = await res.data;
    const nodes = coursesData?.data?.search?.nodes ?? [];

    const courses = nodes.map((node: Course) => {
      const { name, subject, classId, sections } = node;
      return {
        name,
        subject,
        classId,
        sections,
      };
    }) as Course[];

    return courses;
  };

  async fetchTermInfos(subCollege: string) {
    const response = await this.axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        query: `
          query TermInfos($subCollege: String!) {
            termInfos(subCollege: $subCollege) {
              termId
              text
            }
          }`,
        variables: {
          subCollege: subCollege,
        },
      }),
    });
    const termInfos = response.data.data.termInfos;
    return termInfos;
  }

}

export const SearchAPI = new SearchAPIClient();
