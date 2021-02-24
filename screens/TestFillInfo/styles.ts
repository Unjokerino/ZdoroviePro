import React from "react";
import { StyleSheet } from "react-native";
import { Colors, SCREEN_WIDTH } from "../../constants";
import useColorScheme from "../../hooks/useColorScheme";

const styles = StyleSheet.create({
  icon: {
    width: 120,
    height: 120,
    marginTop: 100,
    alignSelf: "center",
    borderRadius: 60,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 17,
    paddingHorizontal: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});

export default styles;
