import React, { memo, useCallback, useEffect, useState } from "react";
import { ScrollView, Image, View, LayoutChangeEvent, Text } from "react-native";
import {
  Colors,
  MAIN_URL,
  QUESTION_CONDITIONAL,
  QUESTION_CONDITIONAL_OPTIONS,
  QUESTION_CUSTOM,
  QUESTION_CUSTOM_CONDITIONAL,
  QUESTION_CUSTOM_SELECT_CONDITIONAL,
  QUESTION_CUSTOM_VARIABLE,
  QUESTION_GROUP_OPTIONS,
  QUESTION_RADIO,
  QUESTION_VARIABLE,
  QUESTION_VARIANTS,
  QUSETION_CUSTOM_VARIANTS,
  RANDOM_IMAGE,
} from "../../constants";
import { Answer } from "../../screens/TestScreen";
import { Condition, Question as QuestionProps } from "../../types/store/tests";
import Button from "../Button";
import Question from "../Question";
import styles from "./styles";

interface TestCardProps extends QuestionProps {
  setAnswers: () => void;
  nextQuestion: (answer: Answer) => void;
  answers: Answer;
}

const TestCard = (question: TestCardProps) => {
  const { title, text, icon, setAnswers, answers, nextQuestion, select } =
    question;

  const uri = `${MAIN_URL}/TestIcons/${icon?.name}.png`;
  const renderContent = useCallback(() => {
    switch (question.select?.type) {
      case QUESTION_CONDITIONAL:
        return (
          <Question.Conditional
            nextQuestion={nextQuestion}
            setAnswers={setAnswers}
          />
        );

      case QUESTION_CUSTOM_SELECT_CONDITIONAL:
      case QUESTION_CUSTOM_CONDITIONAL:
        return (
          <Question.CustomConditional
            answers={answers}
            conditions={select.options}
            setAnswers={setAnswers}
            nextQuestion={nextQuestion}
          />
        );
      case QUESTION_VARIANTS:
      case QUESTION_VARIABLE:
        return <Question.Variable {...question} />;
      case QUESTION_CUSTOM:
        return (
          <Question.Custom
            nextQuestion={nextQuestion}
            placeholder={"введите значение"}
            setAnswers={setAnswers}
          />
        );

      case QUESTION_CUSTOM_VARIABLE:
        return (
          <Question.CustomVariable
            conditions={select.options}
            setAnswers={setAnswers}
            nextQuestion={nextQuestion}
          />
        );
      case QUESTION_CONDITIONAL_OPTIONS:
      case QUESTION_RADIO:
        return (
          <Question.Radio
            options={select.options || []}
            setAnswers={setAnswers}
            nextQuestion={nextQuestion}
          />
        );
      case QUSETION_CUSTOM_VARIANTS:
        return <Question.CustomVariants {...question} />;
      case QUESTION_GROUP_OPTIONS:
        return <Question.GroupOptions {...question} />;
      default:
        return (
          <View>
            <Button
              textColor={Colors.light.header}
              onPress={() => nextQuestion({})}
              title="Пропустить"
            />
          </View>
        );
    }
  }, [question]);
  const renderTitle = () => {
    return title ? <Text style={styles.title}>{title}</Text> : <View />;
  };
  const renderSubTitle = () => {
    return text ? <Text style={styles.subtitle}>{text}</Text> : <View />;
  };

  const onLayout = (event: LayoutChangeEvent) => {};

  return (
    <ScrollView
      onLayout={onLayout}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      <View style={styles.iconContainer}>
        <Image style={styles.icon} resizeMode="contain" source={{ uri }} />
      </View>

      {renderTitle()}
      {renderSubTitle()}
      {renderContent()}
    </ScrollView>
  );
};

export default memo(TestCard);
