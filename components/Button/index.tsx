import React from "react";
import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import { styles } from "./styles";

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
          { textAlign: "center" },
          textColor ? { color: textColor } : {},
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
