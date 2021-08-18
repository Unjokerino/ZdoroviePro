import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { Answer } from "../../../screens/TestScreen";
import Button from "../../Button";
import { styles } from "./styles";
import Icons from "../../../assets/icons";
import { typography } from "../../../constants/Typography";

export default function Custom({
  setAnswers,
  placeholder = "",
  nextQuestion,
}: {
  setAnswers: (_: any) => void;
  placeholder?: string;
  nextQuestion: (answer: Answer) => void;
}) {
  const [text, setText] = useState("");
  return (
    <View>
      <View style={[typography.row, { paddingHorizontal: 40 }]}>
        <Icons.EditIcon />
        <View style={{ marginLeft: 10 }} />
        <TextInput
          keyboardType="number-pad"
          value={text}
          placeholder={placeholder}
          onChangeText={setText}
        />
      </View>
      {!!text && (
        <Button
          style={styles.button}
          title="Далее"
          mode="contained"
          onPress={() => {
            const answer = { customAnswer: text };
            nextQuestion(answer);
            setAnswers((prev: Answer) => ({ ...prev, ...answer }));
          }}
        />
      )}
    </View>
  );
}
