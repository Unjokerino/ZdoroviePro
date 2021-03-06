import React from "react";
import { StyleSheet } from "react-native";
import { Colors, SCREEN_WIDTH } from "../../constants";
import useColorScheme from "../../hooks/useColorScheme";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.light.tint,
  },
  paragraph: {
    textAlign: "center",
    marginBottom: 13,
  },
  title: {
    marginBottom: 13,
  },
  button: {
    marginTop: 30,
  },
  progressContainer: {
    marginTop: 20,
    paddingHorizontal: 23,
  },
  progressInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center",
  },
  progressPercent: {
    fontSize: 22,
  },
  progressCount: { fontSize: 12 },
  categoryText: {
    color: "white",
    alignSelf: "center",
    paddingTop: 56,
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 20,
  },
});

export default styles;
