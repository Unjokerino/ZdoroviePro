import {
  GOALS_URL,
  RANDOM_USER_URL,
  SECOND_TEST_URL,
  SIGN_IN_URL,
  SIGN_UP_URL,
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
  },
};
