import React from "react";
import { View, Text } from "react-native";
import { Checkbox as DefaultCheckbox } from "react-native-paper";

export default function ({
  status,
  onPress,
}: {
  status: "checked" | "unchecked";
  onPress: () => void;
}) {
  return (
    <View
      style={{ backgroundColor: "#f1f1f1", borderRadius: 20, marginRight: 5 }}
    >
      <DefaultCheckbox onPress={onPress} status={status} />
    </View>
  );
}
