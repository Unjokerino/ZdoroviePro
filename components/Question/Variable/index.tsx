import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Answer } from "../../../screens/TestScreen";
import { Option, Select } from "../../../types/store/tests";
import { Text } from "../../Themed";
import Button from "../../Button";
import RadioButton from "../../RadioButton";
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
  const [checked, setChecked] = useState<string>();
  const renderButton = (option: Option, points: number) => {
    const onPress = () => {
      setChecked(option.id);
      setAnswers({ condition: option, points: option.points });
      nextQuestion(
        { condition: option, points: option.points },
        option?.next_question === -1
      );
    };
    switch (option.type) {
      case "radio":
        return (
          <TouchableOpacity
            onPress={onPress}
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              marginBottom: 10,
              flex: 1,
            }}
          >
            <RadioButton
              backgroundColor="#f1f1f1"
              onPress={onPress}
              status={checked === option.id ? "checked" : "unchecked"}
            />
            <Text style={{ flex: 1 }}>{option.title}</Text>
          </TouchableOpacity>
        );
      case "button":
      default:
        return (
          <Button
            style={styles.button}
            title={option.title}
            mode={option.title === "НЕТ" ? "outlined" : "contained"}
            onPress={() => {
              setAnswers({ condition: option, points: option.points });
              nextQuestion(
                { condition: option, points: option.points },
                option?.next_question === -1
              );
            }}
          />
        );
    }
  };
  return (
    <View style={{ width: "100%", paddingHorizontal: 20 }}>
      {select?.options
        .sort((a, b) => a.order - b.order)
        .map((option, points) => renderButton(option, points))}
    </View>
  );
}
