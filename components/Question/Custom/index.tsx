import React, { ReactChild, useCallback, useState } from "react";
import { View, Text, TextInput } from "react-native";
import {} from "react-native-paper";
import { Answer } from "../../../screens/TestScreen";
import Button from "../../Button";
import { styles } from "./styles";
import Icons from "../../../assets/icons";
import { typography } from "../../../constants/Typography";

export default function Custom({
  setAnswers,
  placeholder = "",
}: {
  setAnswers: (_: any) => void;
  placeholder?: string;
}) {
  const [text, setText] = useState("");
  return (
    <View>
      <View style={[typography.row, { paddingHorizontal: 40 }]}>
        <Icons.EditIcon />
        <View style={{ marginLeft: 10 }} />
        <TextInput
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
          onPress={() =>
            setAnswers((prev: Answer) => ({ ...prev, customAnswer: text }))
          }
        />
      )}
    </View>
  );
}
