import React from "react";
import { View, Text } from "react-native";
import { RadioButton as DefaultRadioButton } from "react-native-paper";
import { IS_IOS } from "../constants";

export default function RadioButton({
  status,
  onPress,
  color = "#FF8181",
  backgroundColor = "#fff",
  value = "",
}: {
  color?: string;
  status: "checked" | "unchecked";
  onPress: () => void;
  backgroundColor?: string;
  value?: string;
}) {
  return (
    <View
      style={[
        { borderRadius: 20, marginRight: 10 },
        IS_IOS && { borderColor: color, borderWidth: 3 },
      ]}
    >
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
