import { Picker } from "@react-native-picker/picker";
import React, { ReactChild, useCallback, useRef, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { IconButton } from "react-native-paper";
import Icons from "../../../assets/icons";
import { Answer } from "../../../screens/TestScreen";
import { Condition } from "../../../types/store/tests";
import Button from "../../Button";
import { styles } from "./styles";
import RNPickerSelect from "react-native-picker-select";

const TEST_CONDITIONS = [
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
  conditions,
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
  const pickerRef = useRef(null);

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
          <View
            style={{
              minWidth: 150,
            }}
          >
            {answers.conditionalAnswer && (
              <RNPickerSelect
                ref={pickerRef}
                placeholder="какое"
                onValueChange={changePickerValue}
                selectedValue={selectedValue}
                items={TEST_CONDITIONS.map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
            )}
          </View>
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
