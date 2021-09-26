import React, { useEffect } from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import { Paragraph, Title } from "../../components/Themed";
import { useDispatch, useSelector } from "react-redux";
import {
  Colors,
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
import { RootState } from "../../types/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
export interface SelectProps {
  currentTest: Test;
  currentCategoryIndex: number;
  currentQuestionIndex: number;
  isLoading: boolean;
}

export default function DescriptionScreen({ navigation }) {
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

  const {
    authReducer: { identity },
    testsReducer: { answers },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    AsyncStorage.setItem(
      `@user_${identity.email}_testResults`,
      JSON.stringify(answers)
    );
    AsyncStorage.setItem(`@user_${identity.email}_testDone`, "true");
    // dispatch(getSecondTest());
  }, []);

  const goToTest = () => {
    navigation.replace(HEALTH_PROFILE_SCREEN);
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 500, marginBottom: -100, marginTop: -75 }}>
        <Video
          ref={video}
          style={styles.video}
          source={require("../../assets/videos/healthProfile.mp4")}
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
        <Title style={styles.title}>ПРОФИЛЬ ТВОЕГО ОБРАЗА ЖИЗНИ</Title>
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
            title="Далее"
          />
        </View>
      </ScrollView>
    </View>
  );
}
