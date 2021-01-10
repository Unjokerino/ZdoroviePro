import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button, Paragraph, Title } from "react-native-paper";
import { Colors, TEST_SCREEN } from "../../constants";
import styles from "./styles";

export default function TakeTestScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        style={[{ backgroundColor: Colors.light.header, flex: 1 }]}
        source={require("../../assets/images/anketa-alcohol.png")}
      ></ImageBackground>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.light.background,
          alignItems: "center",
          paddingTop: 25,
          overflow: "hidden",
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
        }}
      >
        <Title style={styles.title}>Пройдите тест ТАКОЙ-ТО</Title>
        <Paragraph style={styles.paragraph}>
          И тут вступительный текст о том почему важно пройти сейчас тест и что
          это даст человеку
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          Анкета для граждан в возрасте до 65 лет для выявления бла бла бла
        </Paragraph>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Button
            onPress={() => navigation.navigate(TEST_SCREEN)}
            color="white"
            style={{
              backgroundColor: Colors.light.tint,
              paddingHorizontal: 30,
              paddingVertical: 8,
              borderRadius: 10,
            }}
          >
            Пройти тест
          </Button>
        </View>
      </View>
    </View>
  );
}
