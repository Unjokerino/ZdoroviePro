import { StyleSheet } from "react-native";

const MARGIN = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 45,
    marginHorizontal: MARGIN,
  },
  graphContainer: {
    paddingHorizontal: 45,
    backgroundColor: "#fff",

    paddingVertical: 10,
    borderRadius: 17,
  },
  card: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    width: "100%",
    marginTop: 17,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 15,
    alignItems: "center",
  },
  iconContainer: {
    width: 49,
    height: 49,
    backgroundColor: "#FF8181",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  good: {
    color: "#009688",
  },
  normal: {
    color: "#ff9800",
  },
  terrible: {
    color: "#D8000C",
  },
  bad: {
    color: "#e91e63",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    paddingTop: 5,
    maxHeight: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  cardInfo: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default styles;
