import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import {
  ACHIEVEMENTS_SCREEN,
  DETAILED_GOAL,
  DETAILED_GOAL_STACK,
  GOALS_SCREEN,
  GOAL_DESCRIPTION,
  GOAL_INFO,
  HEALTH_PROFILE_SCREEN,
  HOME_SCREEN,
  PHYSICAL_ACTIVITY,
  PROFILE_SCREEN,
  RATING_MODAL,
  SCREEN_WIDTH,
  TAKE_TEST,
  TEST_SCREEN,
} from "../constants";
import useColorScheme from "../hooks/useColorScheme";
import { HomeTabParamList } from "../types";
import { GoalsScreen } from "../screens";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Icons from "../assets/icons";
import { BottomNavigation, Text } from "react-native-paper";
import DetailedGoalScreen from "../screens/DetailedGoalScreen";
import GoalDescription from "../screens/DetailedGoalScreen/GoalDescription";
import GoalInfo from "../screens/DetailedGoalScreen/GoalInfo";
import RatingModal from "../components/RatingModal";
import ProfileScreen from "../screens/ProfileScreen";
import AchievementsScreen from "../screens/AchievementsScreen";
import PhysicalActivityScreen from "../screens/DetailedGoalScreen/PhysicalActivityScreen";

const EmptyComponent = () => <View />;

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
    [PROFILE_SCREEN]: ProfileScreen,
    [ACHIEVEMENTS_SCREEN]: AchievementsScreen,
    [GOALS_SCREEN]: EmptyComponent,
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
      barStyle={styles.barStyle}
      style={styles.bottomTab}
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

const GoalStack = createStackNavigator();

function GoalNavigator() {
  return (
    <GoalStack.Navigator mode="modal" headerMode="none">
      <GoalStack.Screen
        name={DETAILED_GOAL}
        component={DetailedGoalScreen}
        options={{ headerShown: false }}
      />
      <GoalStack.Screen
        name={PHYSICAL_ACTIVITY}
        component={PhysicalActivityScreen}
        options={{ headerShown: false }}
      />
      <GoalStack.Screen
        name={RATING_MODAL}
        component={RatingModal}
        options={{ headerShown: false }}
      />
    </GoalStack.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeTabParamList>();

const HomeNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name={GOALS_SCREEN}
      component={GoalsScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name={DETAILED_GOAL_STACK}
      component={GoalNavigator}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name={GOAL_INFO}
      component={GoalInfo}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name={GOAL_DESCRIPTION}
      component={GoalDescription}
      options={{ headerShown: false }}
    />
    <GoalStack.Screen
      name={PHYSICAL_ACTIVITY}
      component={PhysicalActivityScreen}
      options={{ headerShown: false }}
    />

    <GoalStack.Screen
      name={DETAILED_GOAL}
      component={DetailedGoalScreen}
      options={{ headerShown: false }}
    />
    <GoalStack.Screen
      name={RATING_MODAL}
      component={RatingModal}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);

const styles = StyleSheet.create({
  barStyle: {
    width: SCREEN_WIDTH,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    height: 70,
    elevation: 0,
    backgroundColor: "white",
    justifyContent: "center",
  },
  bottomTab: {
    backgroundColor: "transparent",
  },
});
