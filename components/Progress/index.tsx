import React from "react";
import { View } from "../Themed";
import styles from "./styles";

const Progress = ({ value }: { value: number }) => {
  return (
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, { width: `${value}%` }]}></View>
    </View>
  );
};

export default React.memo(Progress);
