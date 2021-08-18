import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  StatusBar,
  Animated,
  FlatList,
  RefreshControl,
} from "react-native";
import { Text } from "../../components/Themed";
import {
  GOAL_DESCRIPTION,
  DETAILED_GOAL_STACK,
  PHYSICAL_ACTIVITY,
} from "../../constants";
import styles from "./styles";
import RecomendedGoalCard from "../../components/RecomendedGoalCard";
import CustomLayout from "../../components/CustomLayout";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserGoals,
  setCurrentGoal,
  getGoals,
  updateUserGoal,
  //@ts-ignore
} from "../../store/actions";
import { Goal } from "../../types/store/goals";
import selectState from "../../store/selectors/goals";

export default function GoalsScreen() {
  const navigation = useNavigation();
  StatusBar.setBarStyle("light-content");
  const scroll = new Animated.Value(0);
  const [value, setValue] = useState(0);

  const {
    goalsSelector: { userGoals, goals },
    isGoalsLoading,
    isUserGoalsLoading,
  } = useSelector(selectState);

  const filteredGoals = useMemo(
    () =>
      goals.filter((goal) => {
        return !userGoals.find((userGoal) => goal.id === userGoal.purpose?.id);
      }),
    [userGoals, goals]
  );

  const dispatch = useDispatch();

  const getInitialData = async () => {
    dispatch(getUserGoals());
    dispatch(getGoals());
  };

  useEffect(() => {
    scroll.addListener(({ value }) => setValue(value));

    getInitialData();
  }, []);

  const goToGoal = (item: Goal) => {
    dispatch(setCurrentGoal(item));
    if (item.status === "inactive" || item.status === "complete") {
      dispatch(updateUserGoal("active"));

      return;
    }

    navigation.navigate(
      item.status === "active" ? DETAILED_GOAL_STACK : GOAL_DESCRIPTION,
      item
    );

    // //Change it to actual goal when API is done
    // if (item.purpose?.id === "4caa0639-08c1-47b0-9a43-6bc1800b3da5") {
    //   console.warn(item.purpose?.id === "4caa0639-08c1-47b0-9a43-6bc1800b3da5");

    // } else {

    // }
  };

  const renderContent = () => (
    <CustomLayout>
      <View style={styles.content}>
        <FlatList
          scrollEnabled={false}
          refreshControl={
            <RefreshControl
              refreshing={isUserGoalsLoading}
              onRefresh={getInitialData}
            />
          }
          showsHorizontalScrollIndicator={false}
          data={userGoals}
          renderItem={({ item }) => (
            <RecomendedGoalCard
              style={styles.card}
              onPress={() => goToGoal(item)}
              {...item}
            />
          )}
          keyExtractor={(item) => item.title}
          style={styles.scrollContainer}
        />

        <View style={styles.divider}></View>
        {filteredGoals?.length > 0 && (
          <Text style={{ fontSize: 18, paddingHorizontal: 20 }}>
            Рекомендуемые цели
          </Text>
        )}
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={filteredGoals}
          refreshControl={
            <RefreshControl
              refreshing={isGoalsLoading}
              onRefresh={getInitialData}
            />
          }
          renderItem={({ item }) => (
            <RecomendedGoalCard
              style={styles.card}
              onPress={() => goToGoal(item)}
              {...item}
            />
          )}
          keyExtractor={(item) => item.title}
          style={styles.scrollContainer}
        />
      </View>
    </CustomLayout>
  );

  return renderContent();
}
function SET_CURRENT_GOAL(SET_CURRENT_GOAL: any) {
  throw new Error("Function not implemented.");
}
