import React, { ReactChild, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Condition } from "../../../types/store/tests";
import Button from "../../Button";
import { styles } from "./styles";

export default function Conditional({
  setAnswers,
  conditions = [],
}: {
  setAnswers: (_: any) => void;
  conditions?: Condition[];
}) {
  return (
    <View>
      {conditions.map((condition) => (
        <Button
          style={styles.button}
          title={condition.title}
          mode={condition.title === "НЕТ" ? "outlined" : "contained"}
          onPress={() => setAnswers({ condition })}
        />
      ))}
    </View>
  );
}
