import React from "react";
import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { styles } from "./styles";
import { Text } from "../Themed";
const Button = ({
  title,
  onPress,
  mode,
  style,
  backgroundColor,
  textColor,
}: {
  title: string;
  onPress: (_: any) => void;
  mode: "outlined" | "contained";
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  textColor?: string;
}) => {
  const textStyle: "outlinedText" | "containedText" = `${mode}Text`;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[mode],
        backgroundColor ? { backgroundColor } : {},
        style,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles[textStyle],
          { textAlign: "center", fontWeight: "bold", fontSize: 17 },
          textColor ? { color: textColor } : {},
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
