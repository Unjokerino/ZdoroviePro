import { StyleSheet } from "react-native";
import { Colors, SCREEN_WIDTH } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    padding: 25,
  },
  caption: {
    fontWeight: "bold",

    fontSize: 16,
  },
  submitContainer: {
    marginVertical: 20,
  },
  submit: {
    marginBottom: 10,
  },
  goBack: {},
  textInput: {
    fontWeight: "bold",
    height: 20,
    backgroundColor: "white",
  },
  personalInfo: {
    justifyContent: "space-between",
  },
  scrollView: {
    flex: 1,
  },
  primaryButton: {
    width: "80%",
  },
  cardWrapper: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 25,
  },
  card: {
    paddingVertical: 15,
    backgroundColor: "white",
    borderRadius: 12,
    marginVertical: 20,
    alignItems: "center",
  },
  tipContainer: {
    width: "80%",
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    marginVertical: 28,
  },
  tip: {
    textAlign: "center",
  },
  picker: {
    marginTop: 40,
    height: 50,
    width: "80%",
  },
});
