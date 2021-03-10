import { StyleSheet } from "react-native";
import { Colors, SCREEN_WIDTH } from "../../constants";

const HEADER_HEIGHT = 120;

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
    justifyContent: "center",
    paddingTop: 30,
  },
  userInfo: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    height: "100%",
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
  greetings: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 16,

    alignItems: "center",
    maxWidth: 100,
    color: "white",
  },
  textInfoContainer: {
    paddingLeft: 9,
  },
});
