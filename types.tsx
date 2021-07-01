import {
  ACHIEVEMENTS_SCREEN,
  CONGRATULATIONS_SCREEN,
  DESCRIPTION_SCREEN,
  DETAILED_GOAL,
  DETAILED_GOAL_SCREEN,
  EXAMINATION_SCREEN,
  GOALS_SCREEN,
  GOAL_DESCRIPTION,
  HEALTH_PROFILE_SCREEN,
  HOME_SCREEN,
  HOME_STACK,
  LOGIN_SCREEN,
  PROFESSIONAL_EXAMINATION_SCREEN,
  PROFESSIONAL_PREPARATIONS_SCREEN,
  PROFILE_SCREEN,
  RECOMENDATION_SCREEN,
  REGISTRATION_SCREEN,
  SECOND_PART_DESCRIPTION_SCREEN,
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
  Options?: Option[];
  type?: Type;
  field?: string;
}

export type RootStackParamList = {
  [TAKE_TEST]: undefined;
  [TEST_SCREEN]:
    | { question: Question; nextScreen: keyof RootStackParamList }
    | undefined;
  [CONGRATULATIONS_SCREEN]: undefined;
  [EXAMINATION_SCREEN]: undefined;
  [PROFESSIONAL_EXAMINATION_SCREEN]: undefined;
  [TEST_FILL_INFO]: undefined;
  [PROFESSIONAL_PREPARATIONS_SCREEN]: undefined;
  [SECOND_PART_DESCRIPTION_SCREEN]: undefined;
  [SILVER_CONGRATULATIONS_SCREEN]: undefined;
  [HEALTH_PROFILE_SCREEN]: undefined;
  [DESCRIPTION_SCREEN]: undefined;
  [GOAL_DESCRIPTION]: undefined;
  [RECOMENDATION_SCREEN]:undefined
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
