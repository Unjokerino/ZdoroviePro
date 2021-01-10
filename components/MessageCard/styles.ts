import { StyleSheet } from "react-native";
import { Colors, SCREEN_WIDTH } from "../../constants";

const HEADER_HEIGHT = 75;

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.light.header,

    marginVertical: 8,
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
  },
  title: {
    fontSize: 12,
    color: "white",
  },
  description: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  redCircle: {
    backgroundColor: "#FF8181",
    width: 75,
    height: 75,
    borderRadius: 15,
  },
  infoContainer: {
    flex: 1,
    paddingRight: 5,
  },
});
