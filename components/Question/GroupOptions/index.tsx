import React, { ReactChild, useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  SectionList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {} from "react-native-paper";
import { Answer } from "../../../screens/TestScreen";
import Button from "../../Button";
import { styles } from "./styles";
import Icons from "../../../assets/icons";
import { typography } from "../../../constants/Typography";
import {
  Condition,
  Question,
  Select,
  Option,
} from "../../../types/store/tests";
import RadioButton from "../../RadioButton";

export default function GroupOptions({
  select,
  nextQuestion,
}: {
  select: Select;
  nextQuestion: (answer: Answer) => void;
}) {
  const [text, setText] = useState("");
  const [answer, setAnswer] = useState<Answer>();
  const DATA = select.group_options.map((option) => ({
    title: option.title,
    data: option.options,
  }));
  const Item = (option: Option) => {
    const onPress = () => {
      const answer = {
        condition: option,
        points: option.points,
      };
      setAnswer(answer);
      nextQuestion(answer);
    };
    return (
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <RadioButton
          status={answer?.condition?.id === option.id ? "checked" : "unchecked"}
          onPress={onPress}
          backgroundColor="#f1f1f1"
          value=""
        />
        <Text style={styles.title}>{option.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <SectionList<Option>
        sections={DATA}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => <Item {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
