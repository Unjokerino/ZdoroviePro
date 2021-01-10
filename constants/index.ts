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

//Platform
export const IS_IOS = Platform.OS === "ios";

//Dimensions
export const SCREEN_WIDTH = Dimensions.get("screen").width;

//API
export const RANDOM_IMAGE = "https://picsum.photos/600/600?random=3";
export const RANDOM_USER_URL = "https://randomuser.me/api/";
