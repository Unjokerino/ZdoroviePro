import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Caption, IconButton, List, Subheading } from "react-native-paper";
import Button from "../components/Button";
import CustomLayout from "../components/CustomLayout";
import { Title } from "../components/Themed";
import { Answers } from "./TestScreen";

export default function AchievementsScreen() {
  const [testAnswers, setTestAnswers] = useState<Answers[]>();
  useEffect(() => {
    getTestResult();
  }, []);

  const getTestResult = async () => {
    const answers: string | null = await AsyncStorage.getItem("testResults");
    if (answers) {
      setTestAnswers(JSON.parse(answers));
      console.log(JSON.parse(answers));
    }
  };

  const clearResults = async () => {
    await AsyncStorage.removeItem("testResults");
    await AsyncStorage.removeItem("testDone");
  };

  return (
    <CustomLayout>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Title>Ваши достижения 🏅</Title>
          <IconButton onPress={clearResults} icon="delete" />
        </View>
        <List.Section title="Резульаты теста">
          {testAnswers?.map((answers, index) => (
            <List.Accordion title={answers[0].category}>
              {answers.map(({ answer }) => (
                <List.Item
                  description={answer.title}
                  title={answer.condition?.title}
                />
              ))}
            </List.Accordion>
          ))}
        </List.Section>
      </View>
    </CustomLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    marginVertical: 20,
    alignSelf: "flex-end",
  },
});
