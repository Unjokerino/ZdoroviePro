import { Picker } from "@react-native-picker/picker";
import React, { ReactChild, useCallback, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { IconButton } from "react-native-paper";
import Icons from "../../../assets/icons";
import { typography } from "../../../constants/Typography";
import { Answer } from "../../../screens/TestScreen";
import { Condition } from "../../../types/store/tests";
import Button from "../../Button";
import { styles } from "./styles";

export default function CustomVariable({
  setAnswers,
  conditions,
}: {
  setAnswers: (_: any) => void;
  conditions?: Condition[];
}) {
  const [text, setText] = useState("");
  const [currentCondition, setCurrentCondtition] = useState<Condition>();
  const changeValue = (condition: Condition) => {
    if (condition.questionsExtra) {
      setCurrentCondtition(condition);
    } else {
      setAnswers({ condition });
    }
  };

  const compliteQuestion = () => {
    setAnswers({ condition: currentCondition, customAnswer: text });
  };

  return (
    <View>
      {text && (
        <Button
          style={{ marginBottom: 10 }}
          title="Далее"
          mode="contained"
          onPress={compliteQuestion}
        />
      )}
      {conditions?.map((condition) => (
        <View>
          <Button
            style={styles.button}
            title={condition.text}
            mode={condition.text === "НЕТ" ? "outlined" : "contained"}
            onPress={() => changeValue(condition)}
          />
          {condition.questionsExtra[0] && (
            <View style={[typography.row, { paddingHorizontal: 40 }]}>
              <Icons.EditIcon />
              <View style={{ marginLeft: 10 }} />
              <TextInput
                value={text}
                placeholder={condition.questionsExtra[0]}
                onChangeText={setText}
              />
            </View>
          )}
        </View>
      ))}
    </View>
  );
}
