import Axios, { AxiosInstance } from "axios";
import { Plan } from "../common/types";

const API_BASE_URL = "http://localhost:4000/api/plans";

class PlanAPIClient {
  private axios: AxiosInstance;

  constructor(baseURL = API_BASE_URL) {
    this.axios = Axios.create({ baseURL: baseURL });
  }

  async addPlan(plan: Plan) {
    console.log(plan);
    try {
      const response = await this.axios.post("/add", plan);
      return response.data;
    } catch (error) {
      console.error("Failed to add plan", error);
      throw error;
    }
  }
}

export const PlanAPI = new PlanAPIClient();

// export const updatePlanApi = async (uuid, planId, updates) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/updatePlan`, {
//       uuid,
//       planId,
//       updates,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Failed to update plan", error);
//     throw error;
//   }
// };

// export const deletePlanApi = async (uuid, planId) => {
//   try {
//     await axios.delete(`${API_BASE_URL}/deletePlan`, {
//       data: { uuid, planId },
//     });
//   } catch (error) {
//     console.error("Failed to delete plan", error);
//     throw error;
//   }
// };
