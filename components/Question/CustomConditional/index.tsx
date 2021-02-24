import { Picker } from "@react-native-picker/picker";
import React, { ReactChild, useCallback, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { IconButton } from "react-native-paper";
import Icons from "../../../assets/icons";
import { Answer } from "../../../screens/TestScreen";
import { Condition } from "../../../types/store/tests";
import Button from "../../Button";
import { styles } from "./styles";

const TEST_CONDITIONS = [
  "какое",
  "легкого",
  "желудка",
  "кишечника",
  "толстой или прямой кишки",
  "предстательной железы",
  "молочной железы",
  "матки",
  "опухоли других локализаций",
  "полипоз желудка",
  "семейный аденоматоз/диффузный полипоз толстой кишки",
];

export default function Conditional({
  setAnswers,
  conditions = [
    "какое",
    "легкого",
    "желудка",
    "кишечника",
    "толстой или прямой кишки",
    "предстательной железы",
    "молочной железы",
    "матки",
    "опухоли других локализаций",
    "полипоз желудка",
    "семейный аденоматоз/диффузный полипоз толстой кишки",
  ],
  answers,
}: {
  setAnswers: (_: any) => void;
  conditions?: Condition[] | string[];
  answers: Answer;
}) {
  const [selectedValue, setSelectedValue] = useState("какое");
  const changePickerValue = (customAnswer: string) => {
    setSelectedValue(customAnswer);
    setAnswers((prev: Answer) => ({ ...prev, customAnswer }));
  };
  return (
    <View>
      <Button
        title="Да"
        style={styles.button}
        onPress={() =>
          setAnswers((prev: Answer) => ({ ...prev, conditionalAnswer: true }))
        }
        mode="contained"
      />
      {answers.conditionalAnswer && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Icons.EditIcon />
          {answers.conditionalAnswer && (
            <Picker
              onValueChange={changePickerValue}
              selectedValue={selectedValue}
              style={{ height: 50, flex: 1 }}
            >
              {TEST_CONDITIONS.map((condition) => (
                <Picker.Item label={condition} value={condition} />
              ))}
            </Picker>
          )}
        </View>
      )}
      <Button
        title="Нет"
        onPress={() =>
          setAnswers((prev: Answer) => ({ ...prev, conditionalAnswer: false }))
        }
        mode="outlined"
      />
    </View>
  );
}
