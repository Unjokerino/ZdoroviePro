import React, { ReactChild, useCallback, useState } from "react";
import { View, Text, TextInput } from "react-native";
import {} from "react-native-paper";
import { Answer } from "../../../screens/TestScreen";
import Button from "../../Button";
import { styles } from "./styles";
import Icons from "../../../assets/icons";
import { typography } from "../../../constants/Typography";
import { Condition, Question, Select } from "../../../types/store/tests";

export default function CustomVariants({
  select,
  nextQuestion,
}: {
  select: Select;
  nextQuestion: (answer: Answer) => void;
}) {
  const [text, setText] = useState("");
  const [currentCondition, setCurrentCondtition] = useState<string>();
  const [answer, setAnswer] = useState<Answer>({});

  return (
    <View>
      {select.options.map((option) => {
        return (
          <View>
            <Button
              style={styles.button}
              title={option.title}
              mode={option.title === "НЕТ" ? "outlined" : "contained"}
              onPress={() => {
                setCurrentCondtition(option.id);
                const tempAnswer = { condition: option, points: option.points };
                setAnswer((prev) => ({
                  ...prev,
                  ...tempAnswer,
                }));
                !option.option_custom && nextQuestion(tempAnswer);
              }}
            />
            {currentCondition === option.id && option.option_custom && (
              <View>
                <View style={[typography.row, { padding: 20 }]}>
                  <Icons.EditIcon />
                  <View style={{ marginLeft: 10 }} />
                  <TextInput
                    keyboardType="number-pad"
                    value={text}
                    style={{ padding: 10 }}
                    placeholder={option.option_custom?.field_text}
                    onChangeText={setText}
                  />
                </View>
                {!!text && (
                  <Button
                    style={{ marginBottom: 20 }}
                    title="Далее"
                    mode="outlined"
                    onPress={() => {
                      const tempAnswer = {
                        ...answer,
                        text,
                      };
                      setAnswer((prev) => ({ ...prev, ...tempAnswer }));
                      nextQuestion(tempAnswer);
                    }}
                  />
                )}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}
