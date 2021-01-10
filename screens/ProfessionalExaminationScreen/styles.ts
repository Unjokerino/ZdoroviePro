import { StyleSheet } from "react-native";
import { Colors, SCREEN_WIDTH } from "../../constants";

const CARD_SIZE = SCREEN_WIDTH / 2 - 35;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    padding: 25,
  },
  screenTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  menuContainer: {
    marginTop: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    marginVertical: 5,
    minWidth: 100,
  },
  caption: {
    flex: 1,
    minWidth: 100,
    color: "#91919F",
  },
  appointmentInfoContainer: {
    paddingHorizontal: 15,
    flex: 1,
  },
  appointmentCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
  },
  appointmentImageContainer: {
    width: 75,
    height: 75,
    backgroundColor: "#FF8181",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  appointmentImage: {
    width: "50%",
    height: "50%",
  },
  card: {
    backgroundColor: "white",
    width: CARD_SIZE,
    height: CARD_SIZE,
    borderRadius: 16,
    padding: 16,
  },
  infoContainer: {
    justifyContent: "space-between",
    marginTop: 12,
  },
  info: {
    alignItems: "center",
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  infoCounterContainer: {
    flex: 1,
    justifyContent: "center",
  },
  infoCounter: {
    fontSize: 28,
  },
});
