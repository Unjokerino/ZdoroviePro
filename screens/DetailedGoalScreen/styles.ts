import React from "react";
import { StyleSheet } from "react-native";
import { Colors, SCREEN_WIDTH } from "../../constants";
import useColorScheme from "../../hooks/useColorScheme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.header,
  },
  content: {
    backgroundColor: Colors.light.background,
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 25,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  caption: {
    fontWeight: "bold",
    paddingLeft: 4,
    fontSize: 16,
  },
  card: { marginBottom: 12 },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    paddingRight: 25,
    flex: 1,
    paddingTop: 15,
    flexDirection: "row",
    alignItems: "center",
    width: SCREEN_WIDTH,
  },
  foreground: {
    paddingRight: 25,
    flexDirection: "row",
    alignItems: "center",

    width: SCREEN_WIDTH,
  },
  headerWrapper: {
    backgroundColor: Colors.light.header,
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 16,
    color: "white",
  },
  headerCaption: {
    fontWeight: "bold",
    color: "white",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  iconButtonContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {},
});

export default styles;
