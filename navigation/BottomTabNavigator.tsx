import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import {
  ACHIEVEMENTS_SCREEN,
  DETAILED_GOAL,
  EXAMINATION_SCREEN,
  GOALS_SCREEN,
  HOME_SCREEN,
  HOME_STACK,
  PROFESSIONAL_EXAMINATION_SCREEN,
  PROFILE_SCREEN,
  SCREEN_WIDTH,
  TAKE_TEST,
  TEST_SCREEN,
} from "../constants";
import useColorScheme from "../hooks/useColorScheme";

import { BottomTabParamList, HomeTabParamList } from "../types";
import { GoalsScreen, HomeScreen } from "../screens";
import { TouchableOpacity, View } from "react-native";
import Icons from "../assets/icons";
import { BottomNavigation, Text } from "react-native-paper";
import DetailedGoalScreen from "../screens/DetailedGoalScreen";
import TakeTestScreen from "../screens/TakeTestScreen";
import TestScreen from "../screens/TestScreen";
import ExaminationScreen from "../screens/ExaminationScreen";
import ProfessionalExaminationScreen from "../screens/ProfessionalExaminationScreen";

const EmptyComponent = () => <View />;

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const [index, setIndex] = React.useState(0);
  const colorScheme = useColorScheme();

  const [routes] = React.useState([
    { key: HOME_SCREEN, title: HOME_SCREEN },
    { key: PROFILE_SCREEN, title: PROFILE_SCREEN },
    { key: ACHIEVEMENTS_SCREEN, title: ACHIEVEMENTS_SCREEN },
    { key: GOALS_SCREEN, title: GOALS_SCREEN },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    [HOME_SCREEN]: HomeNavigator,
    [PROFILE_SCREEN]: ProfessionalExaminationScreen,
    [ACHIEVEMENTS_SCREEN]: EmptyComponent,
    [GOALS_SCREEN]: GoalsScreen,
  });

  const renderIcon = (color: string, { key }: { key: string }) => {
    switch (key) {
      case HOME_SCREEN:
        return <Icons.HomeIcon color={color} />;
      case PROFILE_SCREEN:
        return <Icons.UserIcon color={color} />;
      case ACHIEVEMENTS_SCREEN:
        return <Icons.AwardIcon color={color} />;
      case GOALS_SCREEN:
        return <Icons.CastIcon color={color} />;
      default:
        return;
    }
  };

  const customTabBar = () => (
    <BottomNavigation
      activeColor={Colors[colorScheme].tint}
      inactiveColor="black"
      barStyle={{
        width: SCREEN_WIDTH,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        height: 70,
        elevation: 0,
        backgroundColor: "white",
        justifyContent: "center",
      }}
      style={{
        backgroundColor: "transparent",
      }}
      renderTouchable={(props) => {
        return (
          <TouchableOpacity onPress={props.onPress} style={{ flex: 1 }}>
            {props.children}
          </TouchableOpacity>
        );
      }}
      renderIcon={({ color, route }) => renderIcon(color, route)}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );

  return customTabBar();
}

const HomeStack = createStackNavigator<HomeTabParamList>();

const HomeNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name={HOME_STACK}
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name={DETAILED_GOAL}
      component={DetailedGoalScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name={GOALS_SCREEN}
      component={GoalsScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name={TAKE_TEST}
      component={TakeTestScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name={TEST_SCREEN}
      component={TestScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name={EXAMINATION_SCREEN}
      component={ExaminationScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name={PROFESSIONAL_EXAMINATION_SCREEN}
      component={ProfessionalExaminationScreen}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);
