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

const recomendedGoals: GoalProps[] = [
  {
    title: "Курение",
    duration: 60,
    active: true,
    fullDescription: `ИМЯ, каждый раз, когда ты хочешь покурить, отмечай это здесь - значок
    «Хочу покурить» и мы для того, что бы ты избежал ужасного запаха, не
    тратил зря деньги, не вредил здоровью и не смолил легкие предложим
    альтернативное занятие`,
    goal: ` Твоя задача – вырастить лес, богатый деревьями, цветами, животными и
    птицами. Лес, который будет обогащать нашу планету кислородом. Каждый
    раз когда ты отказываешься от курения, в лесу вырастает растение или
    животное. Через три месяца ты увидишь своей лес, если, конечно, ты его
    вырастишь. Согласен?»`,
    howItWorks: "Тут пока ничего нет",
    buttonText: "Хочу курить",
    background: require("../../assets/images/goalBackground.png"),
  },
  {
    title: "Коррекция питания",
    duration: 60,
    description:
      "Cнизить количество выкуриваемых в день сигарет или совсем отказаться от курения",
    fullDescription: "Тут пока ничего нет",
    goal: "Тут пока ничего нет",
    howItWorks: `скорректировать питание (снизить потребление жира, сахара,
      поваренной соли и увеличить потребление зерновых продуктов, овощей и
      фруктов`,
    buttonText: "Хочу есть",
    background: require("../../assets/images/foodGoal.png"),
  },
  {
    title: "Улучшение физической активности",
    duration: 60,
    description:
      "Cнизить количество выкуриваемых в день сигарет или совсем отказаться от курения",
    fullDescription: "Тут пока ничего нет",
    goal: "Тут пока ничего нет",
    howItWorks: "Тут пока ничего нет",
    buttonText: "Хочу есть",
    background: require("../../assets/images/activityGoal.png"),
  },
];
export default function GoalsScreen({ navigation }) {
  StatusBar.setBarStyle("light-content");
  const colorScheme = useColorScheme();
  const scroll = new Animated.Value(0);
  const [value, setValue] = useState(0);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    scroll.addListener(({ value }) => setValue(value));

    getGoals();
  }, []);

  const getGoals = async () => {
    try {
      const result = await api.goals.fetchGoals();
      console.warn(result);
    } catch (error) {
      console.warn(error);
    }
  };

  const renderContent = () => (
    <CustomLayout openDrawer={navigation.openDrawer}>
      <View style={styles.content}>
        <View
          style={[
            styles.row,
            {
              width: SCREEN_WIDTH,
              alignItems: "center",
              paddingHorizontal: 20,
            },
          ]}
        ></View>
        <FlatList
          initialScrollIndex={1}
          showsHorizontalScrollIndicator={false}
          data={recomendedGoals}
          renderItem={({ item }) => (
            <RecomendedGoalCard
              style={styles.card}
              onPress={() => navigation.navigate(GOAL_DESCRIPTION, item)}
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
