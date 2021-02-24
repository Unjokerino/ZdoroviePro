import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { incrementCurrentTest } from "../../store/actions";
import Button from "../../components/Button";
import CustomLayout from "../../components/CustomLayout";
import {
  CONGRATULATIONS_SCREEN,
  MAIN_URL,
  QUESTION_CONDITIONAL,
  QUESTION_CUSTOM,
  QUESTION_CUSTOM_CONDITIONAL,
  QUESTION_RADIO,
  QUESTION_VARIABLE,
  SCREEN_HEIGHT,
  TEST_SCREEN,
} from "../../constants";
import Progress from "../../components/Progress";
import selectState from "../../store/selectors/tests";
import TestCard from "../../components/TestCard";
import { Category, Condition, Question, Test } from "../../types/store/tests";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { path } from "ramda";
import * as Animatable from "react-native-animatable";

import styles from "./styles";

interface Props {
  navigation: StackNavigationProp<RootStackParamList, typeof TEST_SCREEN>;
  route: RouteProp<RootStackParamList, typeof TEST_SCREEN>;
}

interface SelectProps {
  currentTest: Test;
  currentCategoryIndex: number;
  currentQuestionIndex: number;
  isLoading: boolean;
}

export interface Answer {
  conditionalAnswer?: boolean;
  customAnswer?: string;
  condition?: Condition;
  option?: { text: string; id: string };
}

interface Progress {
  totalQuestions: number;
  currentQuestion: number;
  percent: number;
}

export default function TestScreen({ navigation, route }: Props) {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState<Progress>({
    totalQuestions: 0,
    currentQuestion: 0,
    percent: 0,
  });
  const [shouldShowCategory, setShouldShowCategory] = useState(false);
  const [answers, setAnswers] = useState<Answer>({});

  useEffect(() => {
    setShouldShowCategory(shouldShowNextCategory());
    setProgress(countQuestions());
  }, []);

  useEffect(() => {
    if (
      question?.type === QUESTION_CONDITIONAL &&
      answers.conditionalAnswer !== undefined
    ) {
      nextQuestion();
    }
    if (
      (question?.type === QUESTION_CUSTOM_CONDITIONAL &&
        answers.conditionalAnswer === false) ||
      (answers.customAnswer &&
        answers.conditionalAnswer === true &&
        answers.customAnswer !== "Какое")
    ) {
      nextQuestion();
    }
    if (question?.type === QUESTION_CUSTOM && answers.customAnswer) {
      nextQuestion();
    }

    if (question?.type === QUESTION_RADIO && answers.option) {
      nextQuestion();
    }

    if (
      question?.type === QUESTION_VARIABLE &&
      answers.condition !== undefined
    ) {
      nextQuestion();
    }
  }, [answers]);

  const {
    currentTest,
    currentCategoryIndex,
    currentQuestionIndex,
    isLoading,
  }: SelectProps = useSelector(selectState);

  const category: Category | undefined = path(
    ["categories", currentCategoryIndex],
    currentTest
  );

  const countQuestions = () => {
    const count = {
      totalQuestions: 0,
      currentQuestion: currentQuestionIndex + 1,
      percent: 0,
    };
    currentTest.categories.forEach((category, ci) => {
      category.questions.forEach((qu, qi) => {
        const extraQuestionLength = qu.questionsExtra.length || 0;
        if (ci === currentCategoryIndex && qi === currentQuestionIndex) {
          count.currentQuestion = count.totalQuestions + 1;
        }
        count.totalQuestions += 1;
      });
      count.percent = Math.round(
        (count.currentQuestion / count.totalQuestions) * 100
      );
    });
    return count;
  };

  const question: Question | undefined =
    route.params || path(["questions", currentQuestionIndex], category);

  const getNextQuestion = () => {
    const nextQuestionCard:
      | (Question & { nextCategory?: boolean })
      | undefined =
      path(
        [
          "categories",
          currentCategoryIndex,
          "questions",
          currentQuestionIndex + 1,
        ],
        currentTest
      ) ||
      path(
        ["categories", currentCategoryIndex + 1, "questions", 0],
        currentTest
      );
    return nextQuestionCard;
  };

  const shouldShowNextCategory = () => {
    const firstQuestion: Question | undefined = path(
      ["questions", 0],
      category
    );

    const first = firstQuestion && firstQuestion?.text + firstQuestion?.title;
    const current = question && question?.text + question?.title;
    return current === first;
  };
  const checkIfLastQuestion = () => {
    const isLastCategory =
      currentTest.categories.length === currentCategoryIndex;

    const isLastQuestion =
      (category?.questions?.length || 1 - 1) === currentQuestionIndex;
    console.log(
      isLastQuestion,
      currentQuestionIndex,
      isLastCategory,
      currentCategoryIndex
    );
    return isLastQuestion && isLastCategory;
  };

  const nextQuestion = () => {
    const extraQuestion = path(["questionsExtra", 0], question);
    const isLastQuestion = checkIfLastQuestion();
    if (isLastQuestion) {
      navigation.push(CONGRATULATIONS_SCREEN);
      return;
    }
    if (
      extraQuestion &&
      answers.conditionalAnswer &&
      question?.type !== QUESTION_CUSTOM_CONDITIONAL
    ) {
      navigation.replace(TEST_SCREEN, { ...extraQuestion });
    } else {
      const nextQuestion = getNextQuestion();
      nextQuestion && navigation.push(TEST_SCREEN, { ...nextQuestion });
      dispatch(incrementCurrentTest());
    }
  };

  return (
    <CustomLayout openDrawer={navigation.openDrawer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View
          style={{
            paddingHorizontal: 16,
            flex: 1,
            marginVertical: 45,
            height: SCREEN_HEIGHT - 240,
          }}
        >
          {shouldShowCategory ? (
            <View
              style={{
                borderRadius: 30,
                backgroundColor: "#6360FF",
                height: SCREEN_HEIGHT * 0.6,
                width: "100%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  alignSelf: "center",
                  paddingTop: 46,
                  paddingHorizontal: 20,
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                {category?.text}
              </Text>
              <Animatable.Image
                animation="bounceIn"
                style={{ flex: 1, marginHorizontal: 20 }}
                resizeMode="contain"
                source={{ uri: `${MAIN_URL}/TestIcons/${category?.icon}.png` }}
              />
              <Button
                title="Далее"
                textColor="#6360FF"
                backgroundColor="#fff"
                style={{ marginVertical: 22, marginHorizontal: 35 }}
                mode="contained"
                onPress={() => setShouldShowCategory(false)}
              />
            </View>
          ) : (
            <TestCard
              title={question?.title || ""}
              text={question?.text || ""}
              icon={question?.icon || ""}
              type={question?.type}
              options={question?.options}
              answers={answers}
              setAnswers={setAnswers}
              conditions={question?.conditions}
            />
          )}
          <View style={styles.progressContainer}>
            <View style={styles.progressInfo}>
              <Text style={styles.progressPercent}>{progress?.percent}%</Text>
              <Text
                style={styles.progressCount}
              >{`${progress?.currentQuestion} из ${progress?.totalQuestions}`}</Text>
            </View>
            <Progress value={progress?.percent} />
          </View>
        </View>
      )}
    </CustomLayout>
  );
}
