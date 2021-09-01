import React, { memo, useCallback, useEffect, useState } from "react";
import {
  ScrollView,
  Image,
  View,
  LayoutChangeEvent,
  Animated,
} from "react-native";
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
} from "../../constants";
import { Answer } from "../../screens/TestScreen";
import { Question as QuestionProps } from "../../types/store/tests";
import Button from "../Button";
import Question from "../Question";
import styles from "./styles";
import { Text } from "../../components/Themed";

interface TestCardProps extends QuestionProps {
  setAnswers: (answer: Answer) => void;
  nextQuestion: (answer: Answer) => void;
  answers: Answer;
}

const TestCard = (question: TestCardProps) => {
  const [scrollY] = useState(new Animated.Value(0));
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const width = scrollY.interpolate({
    inputRange: [0, 40],
    outputRange: [75, containerWidth],
    extrapolate: "clamp",
  });

  const backgroundColor = scrollY.interpolate({
    inputRange: [0, 40],
    outputRange: ["#fff", Colors.light.header],
    extrapolate: "clamp",
  });

  const color = scrollY.interpolate({
    inputRange: [0, 40],
    outputRange: ["#000", "#fff"],
    extrapolate: "clamp",
  });

  const borderRadius = scrollY.interpolate({
    inputRange: [0, 40],
    outputRange: [25, 0],
    extrapolate: "clamp",
  });

  const { title, text, icon, setAnswers, answers, nextQuestion, select } =
    question;

  const uri = `${MAIN_URL}/TestIcons/${icon?.name}.png`;

  const renderContent = useCallback(() => {
    switch (question.select?.type) {
      case QUESTION_CONDITIONAL:
        return <Question.Conditional {...question} />;

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
    return title ? (
      <Animated.Text style={[styles.title, { color }]}>{title}</Animated.Text>
    ) : (
      <View />
    );
  };
  const renderSubTitle = () => {
    return text ? (
      <Animated.Text style={[styles.subtitle, { color }]}>{text}</Animated.Text>
    ) : (
      <View />
    );
  };

  const onLayout = (event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  return (
    <>
      <Animated.View
        style={{
          backgroundColor,
          alignItems: "center",
          position: "relative",
          width: "100%",

          borderRadius: 20,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <Text>{question.select?.type}</Text>
        <Animated.View
          style={[
            styles.iconContainer,
            {
              width,

              borderRadius: 20,
              borderTopLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius,
            },
          ]}
        >
          <Image style={styles.icon} resizeMode="contain" source={{ uri }} />
        </Animated.View>
        {renderTitle()}
        {renderSubTitle()}
      </Animated.View>

      <ScrollView
        // onScroll={Animated.event(
        //   [
        //     {
        //       nativeEvent: {
        //         contentOffset: {
        //           y: scrollY,
        //         },
        //       },
        //     },
        //   ],
        //   { useNativeDriver: false }
        // )}
        onLayout={onLayout}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        {renderContent()}
      </ScrollView>
    </>
  );
};

export default memo(TestCard);
