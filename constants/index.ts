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
export const TAKE_TEST = "Пройти тест";
export const TEST_SCREEN = "Тест";
export const EXAMINATION_SCREEN = "Диспансеризация";
export const PROFESSIONAL_EXAMINATION_SCREEN = "Профосмотр";
export const PROFESSIONAL_PREPARATIONS_SCREEN =
  "PROFESSIONAL_PREPARATIONS_SCREEN";
export const CONGRATULATIONS_SCREEN = "CONGRATULATIONS_SCREEN";
export const SILVER_CONGRATULATIONS_SCREEN = "SILVER_CONGRATULATIONS_SCREEN";
export const LOGIN_SCREEN = "Логин";
export const REGISTRATION_SCREEN = "Регистрация";
export const TEST_FILL_INFO = "Заполните информацию для теста";

// Test Cards
export const QUESTION_CONDITIONAL = "conditional";
export const QUESTION_CUSTOM_CONDITIONAL = "custom-conditional";
export const QUESTION_VARIABLE = "variable";
export const QUESTION_CUSTOM = "custom";
export const QUESTION_RADIO = "radio";

//Platform
export const IS_IOS = Platform.OS === "ios";

//Dimensions
export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;

//API
export const RANDOM_IMAGE = "https://picsum.photos/600/600?random=3";
export const RANDOM_USER_URL = "https://randomuser.me/api/";
export const MAIN_URL = "http://unoit.ru/";
export const MAIN_URL_API = "http://unoit.ru/api";
export const MAIN_URL_AUTH = "http://unoit.ru/api/auth";
export const MAIN_TEST_URL = `${MAIN_URL_API}/main-test`;
export const SIGN_IN_URL = `${MAIN_URL_AUTH}/sign-in`;
export const SIGN_UP_URL = `${MAIN_URL_AUTH}/sign-up`;
