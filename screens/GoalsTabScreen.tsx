import React from "react";
import { View, Image } from "react-native";
import { Title, Subheading } from "react-native-paper";
import { SCREEN_WIDTH } from "../constants";

export default function GoalsTabScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Title>Раздел в разработке</Title>
      <Subheading style={{ textAlign: "center" }}>
        Здесь будет кое что интересное после обновления
      </Subheading>
      <Image
        resizeMode="contain"
        style={{ width: SCREEN_WIDTH, height: 300, marginTop: 20 }}
        source={require("../assets/images/catBuilder.png")}
      />
    </View>
  );
}
