import React, { useEffect } from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
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
  useEffect(() => {
    dispatch(getSecondTest());
  }, []);

  const goToTest = () => {
    navigation.replace(TEST_SCREEN, {
      question: question,
      nextScreen: DESCRIPTION_SCREEN,
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 500, marginBottom: -100, marginTop: -75 }}>
        <Video
          ref={video}
          style={styles.video}
          source={require("../../assets/videos/secondTest.mp4")}
          useNativeControls={false}
          resizeMode="cover"
          shouldPlay
          isLooping
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}
      >
        <Title style={styles.title}>УРОВЕНЬ II</Title>
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
            color="white"
            style={styles.button}
            textColor="white"
            title="Анкетирование он-лайн"
          />
        </View>
      </ScrollView>
    </View>
  );
}
