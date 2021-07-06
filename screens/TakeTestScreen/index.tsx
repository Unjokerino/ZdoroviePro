import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Paragraph, Title } from "../../components/Themed";
import { useDispatch, useSelector } from "react-redux";
import { TEST_FILL_INFO } from "../../constants";
import styles from "./styles";
import { getMainTest } from "../../store/actions";
import selectState from "../../store/selectors/tests";
import { Question, Test } from "../../types/store/tests";
import { path } from "ramda";
import Button from "../../components/Button";
import { Video } from "expo-av";
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
    dispatch(getMainTest());
  }, []);

  const goToTest = () => {
    navigation.replace(TEST_FILL_INFO, { ...question });
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 500, marginBottom: -100, marginTop: -75 }}>
        <Video
          ref={video}
          style={styles.video}
          source={require("../../assets/videos/mainTest.mp4")}
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
        <Title style={styles.title}>УРОВЕНЬ I</Title>
        <View style={styles.paragraphContainer}>
          <Paragraph style={styles.subtitle}>
            Профилактический медицинский осмотр / Диспансеризация
          </Paragraph>
          <Paragraph style={styles.paragraph}>
            Акомплекс медицинских обследований, проводимый в целях:
          </Paragraph>
          <Paragraph style={styles.paragraph}>
            — раннего выявления заболеванийи факторов риска их развития,
          </Paragraph>
          <Paragraph style={styles.paragraph}>
            — определения групп здоровья — выработки рекомендаций для пациентов.
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
