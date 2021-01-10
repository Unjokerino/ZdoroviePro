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
    marginTop: 25,
    paddingBottom: 25,
  },
  divider: {
    color: "black",
    width: "100%",
    height: 1,
    marginTop: 32,
    marginHorizontal: 30,
  },
  scrollContainer: {
    marginTop: 24,

    flexGrow: 0,
  },
  chipContainer: {
    flexDirection: "row",
    marginVertical: 40,
  },
  smallCardContainer: {
    width: SCREEN_WIDTH,

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    marginHorizontal: 20,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.light.header,
    color: "white",
    borderRadius: 30,
    marginLeft: 15,
  },
  smallCard: {
    margin: 6,
    borderRadius: 10,
    backgroundColor: "white",
    height: SCREEN_WIDTH / 2.5 - 12,
    width: SCREEN_WIDTH / 2 - 12,
  },

  caption: {
    fontWeight: "bold",
    paddingLeft: 4,
    fontSize: 16,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    paddingHorizontal: 25,

    paddingTop: 15,
    flexDirection: "row",
    alignItems: "center",
    width: SCREEN_WIDTH,
  },
  foreground: {
    paddingHorizontal: 25,
    flex: 1,

    flexDirection: "row",
    alignItems: "flex-start",
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
