import { path } from "ramda";
import React, { useEffect, useState } from "react";
import { Image, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomSplash from "../../components/CustomSplash";
import { RANDOM_IMAGE, TEST_FILL_INFO, TEST_SCREEN } from "../../constants";
import selectState from "../../store/selectors/tests";
import { Question } from "../../types/store/tests";
import { SelectProps } from "../TakeTestScreen";
import styles from "./styles";
import moment from "moment";
import { Title, Text } from "../../components/Themed";
import Button from "../../components/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

interface Props {
  navigation: StackNavigationProp<RootStackParamList, typeof TEST_FILL_INFO>;
}

export default function TestFillInfo({ navigation }: Props) {
  const dispatch = useDispatch();
  const [height, setHeight] = useState<string | undefined>();
  const [weight, setWeight] = useState<string | undefined>();

  const [waist, setWeist] = useState<string | undefined>();

  const [bmi, setBmi] = useState<string | undefined>();

  const {
    currentTest,
    currentCategoryIndex,
    currentQuestionIndex,
    isLoading,
  }: SelectProps = useSelector(selectState);

  const question: Question | undefined = path(
    ["categories", currentCategoryIndex, "questions", currentQuestionIndex],
    currentTest
  );
  const goToTest = () => {
    question?.text && navigation.push(TEST_SCREEN, { ...question });
  };

  useEffect(() => {
    const bodyIndex =
      weight && height ? (+weight / Math.pow(+height, 2)) * 10000 : "";
    setBmi(Math.round(+bodyIndex).toString());
  }, [weight, height]);

  return (
    <CustomSplash
      image={<Image style={styles.icon} source={{ uri: RANDOM_IMAGE }} />}
    >
      <View>
        <Text>Дата анкетирования:</Text>
        <Title style={{ marginBottom: 20, fontWeight: "bold" }}>
          {moment().format("MM.DD.YYYY")}
        </Title>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="number-pad"
            value={height}
            onChangeText={setHeight}
            placeholder="Ваш рост"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={weight}
            keyboardType="number-pad"
            onChangeText={setWeight}
            placeholder="Вес"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={waist}
            onChangeText={setWeist}
            keyboardType="number-pad"
            placeholder="Окружность талии"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={bmi}
            placeholder="Индекс массы тела"
            style={styles.input}
          />
        </View>
        <Button
          style={{ marginBottom: 50 }}
          title="Следующий шаг"
          mode="contained"
          onPress={goToTest}
        />
      </View>
    </CustomSplash>
  );
}
