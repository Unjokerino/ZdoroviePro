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
const defaultParams = {
  localDate: new Date(),
};
export default {
  tests: {
    fetchMainTest: () =>
      healthProInstance.get(MAIN_TEST_URL, { params: defaultParams }),
    fetchSecondTest: () =>
      healthProInstance.get(SECOND_TEST_URL, { params: defaultParams }),
  },
  auth: {
    signIn: (params: { email: string; password: string }) =>
      ssoInstance.post(SIGN_IN_URL, { ...params, ...defaultParams }),
    signUp: (params: { email: string; password: string }) =>
      ssoInstance.post(SIGN_UP_URL, params),
  },
  goals: {
    fetchGoals: (userId: string) =>
      healthProInstance.get(GOALS_URL, {
        params: { ...defaultParams, userId },
      }),
    startUserGoal: (params: { purposeId: string; userId: string }) =>
      healthProInstance.post(`${MAIN_URL}/purpose-user`, params),
    failUserGoal: (userId: string, purposeId: string) =>
      healthProInstance.get(
        `${MAIN_URL}/purpose-user/${userId}/purpose/${purposeId}/failed`
      ),
    updateUserGoal: (userId: string, purposeId: string, status: string) =>
      healthProInstance.patch(
        `${MAIN_URL}/purpose-user/${userId}/purpose/${purposeId}`,
        { status }
      ),
  },
  tasks: {
    createFirstTask: (userId: string, purposeId: string) =>
      healthProInstance.get(
        `${MAIN_URL}/purpose-tasks-user/${userId}/purpose/${purposeId}/first`
      ),
    fetchTasks: (userId: string, purposeId: string) =>
      healthProInstance.get(
        `${MAIN_URL}/purpose-tasks-user/user/${userId}/purpose/${purposeId}`
      ),
    updateTask: (
      userId: string,
      purposeId: string,
      params: {
        status: string;
        comment: string;
        points: number;
        rating: number;
      }
    ) =>
      healthProInstance.post(
        `${MAIN_URL}/purpose-tasks-user/${userId}/purpose/${purposeId}`,
        params
      ),
  },
  users: {
    fetchGoals: (userId: string) =>
      healthProInstance.get(`${MAIN_URL}/purpose-user/${userId}/purpose`),
    fetchUser: (userId: string) =>
      healthProInstance.get(`${USERS_URL}/${userId}`),
  },
};
