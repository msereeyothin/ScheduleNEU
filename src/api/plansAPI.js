import axios from "axios";

const API_BASE_URL = "https://www.scheduleneu.com/api/plans";

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
    const response = await axios.delete(
      `${API_BASE_URL}/deletePlan?uuid=${uuid}&planId=${planId}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to delete plan", error);
    throw error;
  }
};

export const fetchPlansApi = async (uuid) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getPlans`, {
      params: { uuid },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch plans", error);
    throw error;
  }
};
