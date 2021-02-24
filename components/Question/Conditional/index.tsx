import React, { ReactChild, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Button from "../../Button";
import { styles } from "./styles";

export default function Conditional({
  setAnswers,
}: {
  setAnswers: (_: any) => void;
}) {
  return (
    <View>
      <Button
        title="Да"
        style={styles.button}
        onPress={() => setAnswers({ conditionalAnswer: true })}
        mode="contained"
      />
      <Button
        title="Нет"
        onPress={() => setAnswers({ conditionalAnswer: false })}
        mode="outlined"
      />
    </View>
  );
}
