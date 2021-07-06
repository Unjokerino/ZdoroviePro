import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
//@ts-ignore
import { incrementCurrentTest, skipCategory } from "../../store/actions";
import CustomLayout from "../../components/CustomLayout";
import {
  CONGRATULATIONS_SCREEN,
  QUESTION_CUSTOM_CONDITIONAL,
  TEST_SCREEN,
} from "../../constants";
import Progress from "../../components/Progress";
import selectState from "../../store/selectors/tests";
import TestCard from "../../components/TestCard";
import { Category, Question, Test } from "../../types/store/tests";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { path } from "ramda";
import { Text } from "../../components/Themed";
import styles from "./styles";
import { Option } from "../../types/store/tests";
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
  condition?: Option;
  option?: { text: string; id: string };
  points?: number;
}

export type Answers = {
  answer: Answer & { title: string };
  category: string;
}[];

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
    if (answers?.condition) {
    }
  }, [answers]);

  const {
    currentTest,
    currentCategoryIndex,
    currentQuestionIndex,
    isLoading,
  }: SelectProps = useSelector(selectState);

  const category: Category | undefined = path(
    ["categories", currentCategoryIndex, "category"],
    currentTest
  );

  const countQuestions = () => {
    const count = {
      totalQuestions: 0,
      currentQuestion: currentQuestionIndex + 1,
      percent: 0,
    };
    currentTest.categories?.forEach(({ category }, ci) => {
      category.questions?.forEach(({ question: qu }, qi) => {
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
    path(["questions", currentQuestionIndex, "question"], category);

  const getNextQuestion = (skipCategory: boolean = false) => {
    const nextQuestionCard:
      | (Question & { nextCategory?: boolean })
      | undefined =
      path(
        [
          "categories",
          currentCategoryIndex,
          "category",
          "questions",
          currentQuestionIndex + 1,
          "question",
        ],
        currentTest
      ) ||
      path(
        [
          "categories",
          currentCategoryIndex + 1,
          "category",
          "questions",
          0,
          "question",
        ],
        currentTest
      );
    if (skipCategory) {
      const nextQuestionCard:
        | (Question & { nextCategory?: boolean })
        | undefined = path(
        [
          "categories",
          currentCategoryIndex + 1,
          "category",
          "questions",
          0,
          "question",
        ],
        currentTest
      );
      return nextQuestionCard;
    }
    return nextQuestionCard;
  };

  const shouldShowNextCategory = () => {
    const firstQuestion: Question | undefined = path(
      ["questions", 0, "question"],
      category
    );

    const first = firstQuestion && firstQuestion?.text + firstQuestion?.title;
    const current = question && question?.text + question?.title;
    return current === first;
  };
  const checkIfLastQuestion = () => {
    const isLastCategory = !currentTest.categories[currentCategoryIndex + 1];

    const isLastQuestion = !category?.questions[currentQuestionIndex + 1];

    return isLastQuestion && isLastCategory;
  };

  const nextQuestion = (answers: Answer, shouldSkipCategory = false) => {
    const extraQuestion: Question | undefined = path(
      ["extra_questions", 0],
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
      question?.select?.type !== QUESTION_CUSTOM_CONDITIONAL
    ) {
      navigation.replace(TEST_SCREEN, {
        question: extraQuestion,
        nextScreen: route.params?.nextScreen || CONGRATULATIONS_SCREEN,
      });
    } else {
      const nextQuestion: Question | undefined =
        getNextQuestion(shouldSkipCategory);
      nextQuestion &&
        navigation.replace(TEST_SCREEN, {
          question: nextQuestion,
          nextScreen: route.params?.nextScreen || CONGRATULATIONS_SCREEN,
        });
      if (shouldSkipCategory) {
        dispatch(skipCategory(answers));
      } else {
        dispatch(incrementCurrentTest(answers));
      }
    }
  };

  return (
    <CustomLayout disableScroll={true}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View
          style={{
            paddingHorizontal: 16,
            flex: 1,
            marginVertical: 45,
          }}
        >
          {shouldShowCategory ? (
            <CategoryCard
              category={category!}
              onPress={() => setShouldShowCategory(false)}
            />
          ) : (
            <TestCard
              {...question}
              answers={answers}
              setAnswers={setAnswers}
              conditions={question?.conditions}
              nextQuestion={nextQuestion}
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
