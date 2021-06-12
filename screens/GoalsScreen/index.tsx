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
import { getUserGoals, setCurrentGoal } from "../../store/actions";

export default function GoalsScreen() {
  const navigation = useNavigation();
  StatusBar.setBarStyle("light-content");
  const scroll = new Animated.Value(0);
  const [value, setValue] = useState(0);
  const {
    authReducer: { identity },
    goalsReducer: { userGoals },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    scroll.addListener(({ value }) => setValue(value));
    dispatch(getUserGoals());
  }, []);

  const goToGoal = (item) => {
    dispatch(setCurrentGoal(item));
    navigation.navigate(
      item.status === "active" ? DETAILED_GOAL_STACK : GOAL_DESCRIPTION,
      item
    );
  };

  const renderContent = () => (
    <CustomLayout openDrawer={navigation.openDrawer}>
      <View style={styles.content}>
        <FlatList
          initialScrollIndex={1}
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
      </View>
    </CustomLayout>
  );

  return renderContent();
}
function SET_CURRENT_GOAL(SET_CURRENT_GOAL: any) {
  throw new Error("Function not implemented.");
}
