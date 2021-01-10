import React from "react";
import { StyleSheet } from "react-native";
import { Colors, SCREEN_WIDTH } from "../../constants";
import useColorScheme from "../../hooks/useColorScheme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.header,
  },
  mainContainer: {
    flex: 1,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: Colors.light.background,
    zIndex: 1,
  },
  contentWrapper: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 18,
  },
  menuContainer: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: Colors.light.header,
    paddingHorizontal: 25,
    zIndex: 0,
    flexDirection: "row",
    alignItems: "center",
    width: SCREEN_WIDTH,
  },
  profileInfoContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
    alignItems: "center",
  },
  profileInfoItem: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  profileInfoIcon: {
    alignSelf: "flex-start",
    width: 35,
    height: 35,
    marginRight: 10,
    backgroundColor: "#F1F1FA",
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  marginLeft: {
    marginLeft: 10,
  },
  addGoalsButton: {
    backgroundColor: "#4DD0E1",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 30,
    alignSelf: "flex-end",
    position: "relative",
    marginTop: -20,
    marginRight: 5,
  },
});

export default styles;
