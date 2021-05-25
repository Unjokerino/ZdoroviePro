import React from "react";
import { StyleSheet } from "react-native";
import { Colors, SCREEN_WIDTH } from "../../constants";
import useColorScheme from "../../hooks/useColorScheme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.header,
  },
  video: {
    height: "100%",
    width: "100%",
  },
  paragraph: {
    textAlign: "left",
    alignSelf: "center",
    fontStyle: "italic",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 35,
    fontSize: 18,
    fontWeight: "600",
  },
  title: {
    marginBottom: 13,
    fontWeight: "bold",
    alignSelf: "center",
  },
  paragraphContainer: {
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 30,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.light.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 46,
    paddingBottom: 163,

    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",

    flexGrow: 1,
  },
  buttonContainer: {
    justifyContent: "center",

    marginBottom: 63,
  },
  button: {
    backgroundColor: Colors.light.tint,
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 10,

    width: 280,
  },
});

export default styles;
