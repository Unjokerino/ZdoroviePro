import {
  GOALS_URL,
  MAIN_URL,
  RANDOM_USER_URL,
  SECOND_TEST_URL,
  SIGN_IN_URL,
  SIGN_UP_URL,
  USERS_URL,
} from "../constants";
import { MAIN_TEST_URL } from "../constants";
import { healthProInstance, ssoInstance } from "./instances";

export default {
  tests: {
    fetchMainTest: () => healthProInstance.get(MAIN_TEST_URL),
    fetchSecondTest: () => healthProInstance.get(SECOND_TEST_URL),
  },
  auth: {
    signIn: (params: { email: string; password: string }) =>
      ssoInstance.post(SIGN_IN_URL, params),
    signUp: (params: { email: string; password: string }) =>
      ssoInstance.post(SIGN_UP_URL, params),
  },
  goals: {
    fetchGoals: () => healthProInstance.get(GOALS_URL),
    startGoal: (goalID: string, userID: string) =>
      healthProInstance.post(`${USERS_URL}/${userID}/purpose/${goalID}`),
  },
  tasks: {
    fetchTasks: (id: string) =>
      healthProInstance.get(`${MAIN_URL}/purpose-tasks/user/${id}`),
    updateTask: (
      id: string,
      params: {
        status: string;
        comment: string;
        points: number;
        rating: number;
      }
    ) => healthProInstance.put(`${MAIN_URL}/purpose-tasks/${id}`, params),
  },
  users: {
    fetchGoals: (id: string) =>
      healthProInstance.get(`${USERS_URL}/${id}/purpose`),
    fetchUser: (id: string) => healthProInstance.get(`${USERS_URL}/${id}`),
  },
};
