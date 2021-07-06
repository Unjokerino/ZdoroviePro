import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Animated,
} from "react-native";
import { Paragraph, Title } from "../../components/Themed";
import { useDispatch, useSelector } from "react-redux";
import {
  Colors,
  DESCRIPTION_SCREEN,
  HEALTH_PROFILE_SCREEN,
  TEST_FILL_INFO,
  TEST_SCREEN,
} from "../../constants";
import styles from "./styles";
import { getSecondTest, getMainTest } from "../../store/actions";
import selectState from "../../store/selectors/tests";
import { Question, Test } from "../../types/store/tests";
import { path } from "ramda";
import Button from "../../components/Button";
import { Video, AVPlaybackStatus } from "expo-av";
export interface SelectProps {
  currentTest: Test;
  currentCategoryIndex: number;
  currentQuestionIndex: number;
  isLoading: boolean;
}

export default function TakeTestScreen({ navigation }) {
  const dispatch = useDispatch();
  const {
    currentTest,
    currentCategoryIndex,
    currentQuestionIndex,
    isLoading,
  }: SelectProps = useSelector(selectState);
  const video = React.useRef(null);
  const question: Question | undefined = path(
    ["categories", currentCategoryIndex, "questions", currentQuestionIndex],
    currentTest
  );
  const disabled = isLoading && !!question;
  const scrollY = new Animated.Value(0);

  useEffect(() => {
    dispatch(getSecondTest());
  }, []);

  const goToTest = () => {
    if (currentTest.id) {
      navigation.replace(TEST_SCREEN, {
        question: question,
        nextScreen: DESCRIPTION_SCREEN,
      });
    } else {
      dispatch(getSecondTest());
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{ height: 500, marginBottom: -100, marginTop: -75 }}
      >
        <Video
          ref={video}
          style={styles.video}
          source={require("../../assets/videos/secondTest.mp4")}
          useNativeControls={false}
          resizeMode="cover"
          shouldPlay
          isLooping
        />
      </Animated.View>

      <ScrollView
        scrollEventThrottle={4}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        showsVerticalScrollIndicator={false}
        style={[styles.scrollContainer]}
        contentContainerStyle={[styles.contentContainer]}
      >
        <Title style={styles.title}>Углубленный скрининг</Title>
        <View style={styles.paragraphContainer}>
          <Paragraph style={styles.subtitle}>Управление здоровьем</Paragraph>
          <Paragraph style={styles.paragraph}>
            Ответь на уточняющие вопросы о твоем образе жизни и определись с
            целями
          </Paragraph>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            disabled={disabled}
            onPress={goToTest}
            loading={isLoading}
            style={styles.button}
            mode="contained"
            textColor="white"
            title={currentTest.id ? "Анкетирование он-лайн" : "Загрузить тест"}
          />
        </View>
      </ScrollView>
    </View>
  );
}
