import React, { useEffect, useState } from "react";
import {
  View,
  StatusBar,
  Animated,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
  RefreshControl,
} from "react-native";
import Icons from "../../assets/icons";
import StepCard from "../../components/StepCard";
import { Text } from "../../components/Themed";
import {
  SCREEN_WIDTH,
  RANDOM_IMAGE,
  Colors,
  RANDOM_USER_URL,
  TAKE_TEST,
  DETAILED_GOAL,
  GOAL_DESCRIPTION,
  DETAILED_GOAL_STACK,
} from "../../constants";
import styles from "./styles";
import { Caption, Divider } from "react-native-paper";
import useColorScheme from "../../hooks/useColorScheme";
import { User } from "../../constants/Types";
import { path } from "ramda";
import RecomendedGoalCard, {
  GoalProps,
} from "../../components/RecomendedGoalCard";
import CustomLayout from "../../components/CustomLayout";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types/store";
import {
  getUserGoals,
  setCurrentGoal,
  getGoals,
  updateUserGoal,
} from "../../store/actions";
import { Goal } from "../../types/store/goals";

export default function GoalsScreen() {
  const navigation = useNavigation();
  StatusBar.setBarStyle("light-content");
  const [refreshing, setRefreshing] = useState(false);
  const scroll = new Animated.Value(0);
  const [value, setValue] = useState(0);
  const {
    goalsReducer: { userGoals, goals },
  } = useSelector((state: RootState) => state);

  const filteredGoals = goals.filter((goal) => {
    if (userGoals?.length === 0) return true;
    return userGoals.find((ug) => ug.id === goal.id);
  });

  const dispatch = useDispatch();

  const getInitialData = () => {
    setRefreshing(true);
    dispatch(getUserGoals());
    dispatch(getGoals());
    setRefreshing(false);
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
  };

  const renderContent = () => (
    <CustomLayout>
      <View style={styles.content}>
        <FlatList
          scrollEnabled={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
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
