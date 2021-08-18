import React from "react";
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { Text, View } from "../Themed";
import { Colors } from "../../constants";
import { IconButton } from "react-native-paper";
const Button = ({
  title,
  onPress,
  mode,
  style,
  icon,
  loading,
  backgroundColor,
  textColor,
}: {
  loading?: boolean;
  title: string;
  disabled?: boolean;
  onPress: (_: any) => void;
  mode: "outlined" | "contained";
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  textColor?: string;
  icon?: string;
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
      {loading ? (
        <ActivityIndicator color={Colors.light.header} />
      ) : (
        <View
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
            },
            backgroundColor
              ? { backgroundColor }
              : { backgroundColor: "transparent" },
          ]}
        >
          {icon && (
            <IconButton
              style={{ margin: 0, padding: 0, marginRight: 20 }}
              icon={icon}
            />
          )}
          <Text
            style={[
              styles[textStyle],
              { textAlign: "center", fontWeight: "bold", fontSize: 17 },
              textColor ? { color: textColor } : {},
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
