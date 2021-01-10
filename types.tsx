import {
  ACHIEVEMENTS_SCREEN,
  DETAILED_GOAL,
  EXAMINATION_SCREEN,
  GOALS_SCREEN,
  HOME_SCREEN,
  HOME_STACK,
  PROFESSIONAL_EXAMINATION_SCREEN,
  PROFILE_SCREEN,
  TAKE_TEST,
  TEST_SCREEN,
} from "./constants";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  [HOME_STACK]: undefined;
  [HOME_SCREEN]: undefined;
  [ACHIEVEMENTS_SCREEN]: undefined;
  [PROFILE_SCREEN]: undefined;
  [GOALS_SCREEN]: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
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
