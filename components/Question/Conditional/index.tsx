import React, { ReactChild, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Answer } from "../../../screens/TestScreen";
import { Select } from "../../../types/store/tests";
import Button from "../../Button";
import { styles } from "./styles";

export default function Conditional({
  setAnswers,
  select,
  nextQuestion,
}: {
  setAnswers: (_: any) => void;
  select: Select;
  nextQuestion: (answer: Answer, shouldSkipCategory?: boolean) => void;
}) {
  return (
    <View>
      <Button
        title="Да"
        style={styles.button}
        onPress={() => {
          setAnswers({ conditionalAnswer: true });
          nextQuestion({ conditionalAnswer: true, points: 0 });
        }}
        mode="contained"
      />
      <Button
        title="Нет"
        onPress={() => {
          setAnswers({ conditionalAnswer: false });
          nextQuestion({ conditionalAnswer: false, points: 0 });
        }}
        mode="outlined"
      />
    </View>
  );
}
