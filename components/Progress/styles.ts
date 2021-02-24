import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const styles = StyleSheet.create({
  progressContainer: {
    height: 15,
    borderRadius: 25,
    width: "100%",
    overflow: "hidden",

    backgroundColor: "#E5E5E5",
  },
  progressBar: {
    backgroundColor: "#4DD0E1",
    height: "100%",
  },
});

export default styles;
