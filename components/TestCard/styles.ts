import { Colors } from "../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 38,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  title: {
    paddingHorizontal: 25,
    textAlign: "center",

    fontWeight: "bold",
    fontSize: 18,
  },
  subtitle: {
    paddingHorizontal: 25,
    textAlign: "center",
    marginBottom: 30,

    fontSize: 18,
  },
  iconContainer: {
    backgroundColor: "#FF8181",
    width: 75,
    height: 75,
    borderRadius: 25,
    marginBottom: 30,
    padding: 10,
  },
  icon: {
    height: "100%",
  },
});

export default styles;
