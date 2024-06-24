import Axios from "axios";
import { planAPI } from "./plans.api";

const AUTH_API_URL = "http://localhost:8081/api/auth";

class AuthAPI {
    async login(username: string, password: string) {
        try {
            const response = await Axios.post(`${AUTH_API_URL}/login`, {
                username,
                password,
            });
            const { token, user } = response.data;
            const oldUuid = localStorage.getItem("uuid");
            localStorage.setItem("token", token);
            localStorage.setItem("uuid", user.uuid);
            planAPI.setAuthToken(token);

            await this.mergePlans(oldUuid, user.uuid);
            return response.data;
        } catch (error) {
            console.error("Failed to login", error);
            throw error;
        }
    }

    async register(username: string, password: string) {
        try {
            const response = await Axios.post(`${AUTH_API_URL}/register`, {
                username,
                password,
            });
            const { token, user } = response.data;
            const oldUuid = localStorage.getItem("uuid");
            localStorage.setItem("token", token);
            localStorage.setItem("uuid", user.uuid);
            planAPI.setAuthToken(token);

            await this.mergePlans(oldUuid, user.uuid);
            return response.data;
        } catch (error) {
            console.error("Failed to register", error);
            throw error;
        }
    }

    async mergePlans(oldUuid: string | null, newUuid: string) {
        if (oldUuid && oldUuid !== newUuid) {
            const oldPlans = await planAPI.fetchPlans(oldUuid);
            const newPlans = await planAPI.fetchPlans(newUuid);

            for (const plan of oldPlans) {
                const isDuplicate = newPlans.some((newPlan: any) => newPlan._id === plan._id);
                if (!isDuplicate) {
                    await planAPI.addPlan(plan);
                }
            }
            localStorage.setItem("uuid", newUuid);
        }
    }
}

export const authAPI = new AuthAPI();
