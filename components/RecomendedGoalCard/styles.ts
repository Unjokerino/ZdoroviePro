import { Colors, SCREEN_WIDTH } from "../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    marginBottom: 25,
  },
  title: {
    color: "white",
    paddingTop: 17,
    paddingHorizontal: 15,
    fontSize: 18,
  },
  subtitle: {
    color: "white",
    fontSize: 12,
    paddingLeft: 15,
  },
  progressInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    alignItems: "center",
  },
  description: {
    color: "white",

    borderLeftWidth: 4,
    borderColor: "#fff",
    marginLeft: 17,
    marginRight: 70,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  done: {
    alignSelf: "flex-end",
    marginRight: 35,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 9,
    color: Colors.light.header,
    marginBottom: -20,
    borderRadius: 6,
    zIndex: 1,
  },
  inProgress: {
    alignSelf: "flex-end",
    marginRight: 35,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 9,
    color: "#4DD0E1",
    marginBottom: -20,
    borderRadius: 6,
    zIndex: 1,
  },
  personImage: {
    height: 91,
    width: 65,
    alignSelf: "flex-end",
    marginTop: -90,
    marginRight: 20,
  },
  inactive: {
    alignSelf: "flex-end",
    marginRight: 35,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 9,
    color: "gray",
    marginBottom: -20,
    borderRadius: 6,
    zIndex: 1,
  },
  failed: {
    alignSelf: "flex-end",
    marginRight: 35,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 9,
    color: "red",
    marginBottom: -20,
    borderRadius: 6,
    zIndex: 1,
  },
  text: {
    color: "#fff",
  },
  percent: {
    color: "#fff",
    fontSize: 25,
  },
  progressBar: {
    marginLeft: 15,
    marginRight: 70,
  },
  card: {
    borderRadius: 10,
    height: SCREEN_WIDTH / 2,
    backgroundColor: "#6360FF",
  },
});

export default styles;
