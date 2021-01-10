import React from "react";
import { StyleSheet } from "react-native";
import { Colors, SCREEN_WIDTH } from "../../constants";
import useColorScheme from "../../hooks/useColorScheme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.header,
  },
  paragraph: {
    textAlign: "center",
    marginBottom: 13,
  },
  title: {
    marginBottom: 13,
  },
});

export default styles;
