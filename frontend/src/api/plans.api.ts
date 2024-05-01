import Axios, { AxiosInstance } from "axios";

import { Plan } from "../utils/types";

const API_BASE_URL = "http://localhost:8081/api/plans";

class PlanAPI {
  private axios: AxiosInstance;

  constructor(baseURL = API_BASE_URL) {
    this.axios = Axios.create({ baseURL: baseURL });
  }

  async addPlan(uuid: string | null, plan: Plan) {
    try {
      const response = await this.axios.post(`${API_BASE_URL}/addPlan`, {
        uuid,
        plan,
      });
      return response.data;
    } catch (error) {
      console.error("Failed to add plan", error);
      throw error;
    }
  }

  async updatePlan(uuid: string | null, planId: string, updates: any) {
    try {
      const response = await this.axios.post(`${API_BASE_URL}/updatePlan`, {
        uuid,
        planId,
        updates,
      });
      return response.data;
    } catch (error) {
      console.error("Failed to update plan", error);
      throw error;
    }
  }
  async fetchPlans(uuid: string | null) {
    try {
      const response = await this.axios.get(`${API_BASE_URL}/getPlans`, {
        params: { uuid },
      });
      return response.data;
    } catch (error) {
      console.error("Failed to fetch plans", error);
      throw error;
    }
  }

  async deletePlans(uuid: string | null, planId: string) {
    try {
      const response = await this.axios.delete(
        `${API_BASE_URL}/deletePlan?uuid=${uuid}&planId=${planId}`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to delete plan", error);
      throw error;
    }
  }
}

export const planAPI = new PlanAPI();
