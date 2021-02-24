import {
  ACHIEVEMENTS_SCREEN,
  CONGRATULATIONS_SCREEN,
  DETAILED_GOAL,
  EXAMINATION_SCREEN,
  GOALS_SCREEN,
  HOME_SCREEN,
  HOME_STACK,
  LOGIN_SCREEN,
  PROFESSIONAL_EXAMINATION_SCREEN,
  PROFESSIONAL_PREPARATIONS_SCREEN,
  PROFILE_SCREEN,
  REGISTRATION_SCREEN,
  SILVER_CONGRATULATIONS_SCREEN,
  TAKE_TEST,
  TEST_FILL_INFO,
  TEST_SCREEN,
} from "./constants";
import { Question, Type } from "./types/store/tests";

interface Option {
  title: string;
}

export interface TestProps {
  icon: string;
  title: string;
  text: string | null;
  options?: Option[];
  type?: Type;
}

export type RootStackParamList = {
  [TAKE_TEST]: undefined;
  [TEST_SCREEN]: Question | undefined;
  [CONGRATULATIONS_SCREEN]: undefined;
  [EXAMINATION_SCREEN]: undefined;
  [PROFESSIONAL_EXAMINATION_SCREEN]: undefined;
  [TEST_FILL_INFO]: undefined;
  [PROFESSIONAL_PREPARATIONS_SCREEN]: undefined;
  [SILVER_CONGRATULATIONS_SCREEN]: undefined;
};

export type BottomTabParamList = {
  [HOME_STACK]: undefined;
  [HOME_SCREEN]: undefined;
  [ACHIEVEMENTS_SCREEN]: undefined;
  [PROFILE_SCREEN]: undefined;
  [GOALS_SCREEN]: undefined;
};

export type LoginStackParamList = {
  [LOGIN_SCREEN]: undefined;
  [REGISTRATION_SCREEN]: { email: string; password: string };
};

export type HomeTabParamList = {
  [HOME_STACK]: undefined;
  [DETAILED_GOAL]: undefined;
  [GOALS_SCREEN]: undefined;
  [TAKE_TEST]: undefined;
  [TEST_SCREEN]: undefined;
  [EXAMINATION_SCREEN]: undefined;
  [PROFESSIONAL_EXAMINATION_SCREEN]: undefined;
};
