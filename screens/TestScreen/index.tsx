import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
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
  QUESTION_CUSTOM_VARIABLE,
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

import { Text } from "../../components/Themed";

import styles from "./styles";
import CategoryCard from "../../components/CategoryCard";

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

    if (question?.type !== QUESTION_CUSTOM_VARIABLE && answers.condition) {
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
    route.params?.question ||
    path(["questions", currentQuestionIndex], category);

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
    return isLastQuestion && isLastCategory;
  };

  const nextQuestion = () => {
    const extraQuestion: Question | undefined = path(
      ["Question_Extras", 0],
      question
    );
    const isLastQuestion = checkIfLastQuestion();
    if (isLastQuestion) {
      navigation.push(route.params?.nextScreen || CONGRATULATIONS_SCREEN);
      return;
    }
    if (
      extraQuestion &&
      answers.conditionalAnswer &&
      question?.type !== QUESTION_CUSTOM_CONDITIONAL
    ) {
      navigation.replace(TEST_SCREEN, {
        question: extraQuestion,
        nextScreen: route.params?.nextScreen || CONGRATULATIONS_SCREEN,
      });
    } else {
      const nextQuestion: Question | undefined = getNextQuestion();
      nextQuestion &&
        navigation.push(TEST_SCREEN, {
          question: nextQuestion,
          nextScreen: route.params?.nextScreen || CONGRATULATIONS_SCREEN,
        });
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
            height: SCREEN_HEIGHT - 255,
          }}
        >
          {shouldShowCategory ? (
            <CategoryCard
              category={category}
              onPress={() => setShouldShowCategory(false)}
            />
          ) : (
            <TestCard
              {...question}
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
