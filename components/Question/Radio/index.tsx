import React, { ReactChild, useCallback, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../../Themed";
import { typography } from "../../../constants/Typography";
import { Option } from "../../../types/store/tests";
import RadioButton from "../../RadioButton";

export default function Radio({
  setAnswers,
  options,
}: {
  setAnswers: (_: any) => void;
  options: Option[];
}) {
  const [checkedIndex, setcheckedIndex] = useState(-1);

  const changeAnswer = (index: number) => {
    setcheckedIndex(index);
    setAnswers({ option: options[index] });
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
