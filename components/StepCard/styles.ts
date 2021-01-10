import { Colors } from "../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
  },
  mainInfo: {
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    paddingRight: 20,
  },
  title: {
    fontSize: 14,
  },
  text: {
    height: 45,
    overflow: "hidden",
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 15,
  },
  footer: {
    marginTop: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  footerText: {
    color: "#91919F",
    fontSize: 12,
  },
});
export default styles;
