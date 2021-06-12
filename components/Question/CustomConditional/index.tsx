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
import { IS_IOS } from "../../../constants";

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
  conditions?: Condition[];
  answers: Answer;
}) {
  const [selectedValue, setSelectedValue] = useState("какое");
  const changePickerValue = (customAnswer: string) => {
    setSelectedValue(customAnswer);
    setAnswers((prev: Answer) => ({ ...prev, customAnswer }));
  };
  const pickerRef = useRef(null);
  const options: string[] =
    conditions && conditions.length > 0
      ? conditions.map((item) => item.title)
      : TEST_CONDITIONS;
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
            {IS_IOS ? (
              <RNPickerSelect
                ref={pickerRef}
                placeholder={{ label: "какое" }}
                onValueChange={changePickerValue}
                items={options.map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
            ) : (
              <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={changePickerValue}
              >
                {options.map((item) => (
                  <Picker.Item label={item} value={item} />
                ))}
              </Picker>
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
