import { path, pathOr } from "ramda";
import React, { useState } from "react";
import { View, TextInput } from "react-native";
import Icons from "../../../assets/icons";
import { typography } from "../../../constants/Typography";
import { Condition, Question } from "../../../types/store/tests";
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
    if (condition.Question_Extras && condition.Question_Extras[0]) {
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
      {!!text && (
        <Button
          style={{ marginBottom: 20 }}
          title="Далее"
          mode="outlined"
          onPress={compliteQuestion}
        />
      )}
      {conditions?.map((condition) => {
        const shouldShowExtra: Question | boolean = pathOr(
          false,
          ["extra_questions", 0],
          condition
        );
        return (
          <View>
            <Button
              style={styles.button}
              title={condition.title}
              mode={condition.title === "НЕТ" ? "outlined" : "contained"}
              onPress={() => changeValue(condition)}
            />
            {shouldShowExtra && currentCondition?.text === condition.text && (
              <View style={[typography.row, { paddingHorizontal: 40 }]}>
                <Icons.EditIcon />
                <View style={{ marginLeft: 10 }} />
                <TextInput
                  value={text}
                  style={{ minWidth: 100, backgroundColor: "#f1f1f1" }}
                  placeholder={shouldShowExtra?.text}
                  onChangeText={setText}
                />
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}
