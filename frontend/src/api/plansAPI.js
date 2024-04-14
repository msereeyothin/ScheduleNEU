import axios from "axios";

const API_BASE_URL = "http://localhost:8081/api/plans";

export const addPlanApi = async (uuid, plan) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/addPlan`, {
      uuid,
      plan,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to add plan", error);
    throw error;
  }
};

export const updatePlanApi = async (uuid, planId, updates) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/updatePlan`, {
      uuid,
      planId,
      updates,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to update plan", error);
    throw error;
  }
};

export const deletePlanApi = async (uuid, planId) => {
  try {
    await axios.delete(`${API_BASE_URL}/deletePlan`, {
      data: { uuid, planId },
    });
  } catch (error) {
    console.error("Failed to delete plan", error);
    throw error;
  }
};
