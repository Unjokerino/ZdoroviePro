import { Colors, SCREEN_WIDTH } from "../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: SCREEN_WIDTH / 2,
    width: SCREEN_WIDTH - 100,
    borderRadius: 10,
    overflow: "hidden",
  },
  title: {
    color: "white",
    paddingTop: 17,
    paddingLeft: 15,
    fontSize: 18,
  },
});

export default styles;
