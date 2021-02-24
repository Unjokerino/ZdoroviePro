import React, { useEffect, useState } from "react";
import { ScrollView, Image, View, Text, LayoutChangeEvent } from "react-native";
import {
  MAIN_URL,
  QUESTION_CONDITIONAL,
  QUESTION_CUSTOM,
  QUESTION_CUSTOM_CONDITIONAL,
  QUESTION_RADIO,
  QUESTION_VARIABLE,
  RANDOM_IMAGE,
} from "../../constants";
import { Answer } from "../../screens/TestScreen";
import { TestProps } from "../../types";
import { Condition } from "../../types/store/tests";
import Question from "../Question";
import styles from "./styles";

interface TestCardProps extends TestProps {
  setAnswers: () => void;
  conditions?: Condition[];
  answers: Answer;
}

const TestCard = ({
  title,
  text,
  icon,
  type,
  setAnswers,
  options,
  answers,
  conditions,
}: TestCardProps) => {
  const uri = `${MAIN_URL}/TestIcons/${icon}.png`;

  const renderContent = () => {
    switch (type) {
      case QUESTION_CONDITIONAL:
        return <Question.Conditional setAnswers={setAnswers} />;
      case QUESTION_CUSTOM_CONDITIONAL:
        return (
          <Question.CustomConditional
            answers={answers}
            conditions={conditions}
            setAnswers={setAnswers}
          />
        );
      case QUESTION_VARIABLE:
        return (
          <Question.Variable conditions={conditions} setAnswers={setAnswers} />
        );
      case QUESTION_CUSTOM:
        return (
          <Question.Custom placeholder={text || ""} setAnswers={setAnswers} />
        );
      case QUESTION_RADIO:
        console.log(options);
        return (
          <Question.Radio options={options || []} setAnswers={setAnswers} />
        );
      default:
        return <View />;
    }
  };
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

export default TestCard;
