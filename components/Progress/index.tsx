import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { View } from "../Themed";
import styles from "./styles";

const Progress = ({
  value,
  style,
}: {
  value: number;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={[styles.progressContainer, style]}>
      <View style={[styles.progressBar, { width: `${value}%` }]}></View>
    </View>
  );
};

export default React.memo(Progress);
