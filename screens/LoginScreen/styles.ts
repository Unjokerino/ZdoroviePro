import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.header,
  },
  icon: {
    width: 104,
    height: 104,
    marginTop: 100,
    alignSelf: "center",
  },
  wrapper: {
    backgroundColor: Colors.light.background,
    flex: 1,
    marginTop: 85,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 39,
  },
  title: {
    color: "white",
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 25,
  },
  socialIcon: {
    width: 16,
    height: 16,
  },
  socialIconBig: {
    width: 50,
    height: 50,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 17,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  caption: {
    alignSelf: "center",
    marginVertical: 22,
    paddingHorizontal: 10,
  },
});

export default styles;
