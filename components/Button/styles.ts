import { Colors } from "../../constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 200,
    paddingHorizontal: 40,
  },
  contained: {
    backgroundColor: "#6360FF",
  },
  containedText: {
    color: "#fff",
    textAlign: "center",
  },
  outlined: {
    backgroundColor: "transparent",
    borderColor: "#6360FF",
    borderWidth: 2,
  },
  outlinedText: {
    color: "#6360FF",
  },
});
