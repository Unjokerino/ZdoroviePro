import { Dimensions, Platform } from "react-native";

export { default as Colors } from "./Colors";
export { default as Layout } from "./Layout";

//Main Screens
export const HOME_SCREEN = "Главная";
export const PROFILE_SCREEN = "Профиль";
export const ACHIEVEMENTS_SCREEN = "Достижения";
export const GOALS_SCREEN = "Цели";
export const HOME_STACK = "Home Stack";
export const DETAILED_GOAL = "Detailed Goal";
export const GOAL_INFO = "Goal Info";
export const DETAILED_GOAL_STACK = "DETAILED_GOAL_STACK";
export const TAKE_TEST = "Пройти тест";
export const TEST_SCREEN = "Тест";
export const GOAL_DESCRIPTION = "Информация о Цели";
//TODO: TEMPORARY
export const PHYSICAL_ACTIVITY = "PHYSICAL_ACTIVITY";
export const EXAMINATION_SCREEN = "Диспансеризация";
export const PROFESSIONAL_EXAMINATION_SCREEN = "Профосмотр";
export const PROFESSIONAL_PREPARATIONS_SCREEN =
  "PROFESSIONAL_PREPARATIONS_SCREEN";
export const CONGRATULATIONS_SCREEN = "CONGRATULATIONS_SCREEN";
export const SILVER_CONGRATULATIONS_SCREEN = "SILVER_CONGRATULATIONS_SCREEN";
export const SECOND_PART_DESCRIPTION_SCREEN = "SECOND_PART_DESCRIPTION_SCREEN";
export const HEALTH_PROFILE_SCREEN = "HEALTH_PROFILE_SCREEN";
export const DESCRIPTION_SCREEN = "DESCRIPTION_SCREEN";
export const LOGIN_SCREEN = "Логин";
export const RECOMENDATION_SCREEN = "RecomendationScreen";
export const REGISTRATION_SCREEN = "Регистрация";
export const TEST_FILL_INFO = "Заполните информацию для теста";
export const RATING_MODAL = "RATING_MODAL";

// Test Cards
export const QUESTION_CONDITIONAL = "conditional";
export const QUESTION_CUSTOM_CONDITIONAL = "custom-conditional";
export const QUESTION_CUSTOM_SELECT_CONDITIONAL = "custom-select-conditional";
export const QUESTION_VARIANTS = "variants";
export const QUESTION_VARIABLE = "variable";
export const QUESTION_CUSTOM = "custom";
export const QUESTION_CONDITIONAL_OPTIONS = "conditional-options";
export const QUESTION_GROUP_OPTIONS = "group-options";
export const QUSETION_CUSTOM_VARIANTS = "custom-variants";
export const QUESTION_RADIO = "radio";
export const QUESTION_CUSTOM_VARIABLE = "custom-variable";

//Platform
export const IS_IOS = Platform.OS === "ios";

//Dimensions
export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;

//API
export const RANDOM_IMAGE = "https://picsum.photos/600/600?random=3";
export const RANDOM_USER_URL = "https://randomuser.me/api/";
export const MAIN_URL = "https://unoit.ru";
export const MAIN_URL_API = "https://unoit.ru";
export const MAIN_URL_AUTH = "https://unoit.ru/auth";
export const MAIN_TEST_URL = `${MAIN_URL_API}/tests/a2df3ac9-b68b-4f94-aaf0-ccefbcbfa3b4`;
export const SECOND_TEST_URL = `${MAIN_URL_API}/tests/35c4071e-73c3-4652-a475-dce105986025`;
export const SIGN_IN_URL = `${MAIN_URL_AUTH}/sign-in`;
export const SIGN_UP_URL = `${MAIN_URL_AUTH}/sign-up`;
export const GOALS_URL = `${MAIN_URL_API}/purpose`;
export const USERS_URL = `${MAIN_URL_API}/users`;
