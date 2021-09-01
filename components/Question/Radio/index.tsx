import React, { ReactChild, useCallback, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../../Themed";
import { typography } from "../../../constants/Typography";
import { Option } from "../../../types/store/tests";
import RadioButton from "../../RadioButton";
import { Answer } from "../../../screens/TestScreen";

export default function Radio({
  setAnswers,
  options,
  nextQuestion,
}: {
  setAnswers: (_: any) => void;
  options: Option[];
  nextQuestion: (answer: Answer, shouldSkipCategory?: boolean) => void;
}) {
  const [checkedIndex, setcheckedIndex] = useState(-1);

  const changeAnswer = (index: number) => {
    setcheckedIndex(index);
    setAnswers({ option: options[index] });
    nextQuestion({
      option: {
        id: options[index].id,
        text: options[index].title,
      },
      points: options[index].points,
    });
  };
  return (
    <View>
      {options.map((option, index) => (
        <TouchableOpacity
          onPress={() => changeAnswer(index)}
          style={[typography.row, { paddingHorizontal: 30 }]}
        >
          <RadioButton
            color="#6360FF"
            onPress={() => changeAnswer(index)}
            value={option.title}
            status={index === checkedIndex ? "checked" : "unchecked"}
          />
          <Text style={{ paddingRight: 40, marginLeft: 10 }}>
            {option.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
