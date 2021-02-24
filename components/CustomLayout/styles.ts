import { StyleSheet } from "react-native";
import { Colors, SCREEN_WIDTH } from "../../constants";

const HEADER_HEIGHT = 75;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.header,
  },
  wrapper: {
    flex: 1,
    backgroundColor: Colors.light.background,
    overflow: "hidden",
  },
  scrollView: {
    flex: 1,
  },
  iconButtonContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 10,
    height: HEADER_HEIGHT - 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    paddingHorizontal: 25,

    flexDirection: "row",
    alignItems: "center",

    width: SCREEN_WIDTH,
    height: HEADER_HEIGHT,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  headerTitle: {
    fontSize: 16,
    color: "white",
  },
});
