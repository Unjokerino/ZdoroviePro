import React from "react";
import { View, Text } from "react-native";
import { RadioButton as DefaultRadioButton } from "react-native-paper";

export default function RadioButton({
  status,
  onPress,
  color = "#FF8181",
  value = "",
}: {
  color?: string;
  status: "checked" | "unchecked";
  onPress: () => void;
  value?: string;
}) {
  return (
    <View style={{ backgroundColor: "#fff", borderRadius: 20, marginRight: 5 }}>
      <DefaultRadioButton
        color={color}
        disabled={false}
        testID="radioButton"
        value={value}
        status={status}
        onPress={onPress}
      />
    </View>
  );
}
