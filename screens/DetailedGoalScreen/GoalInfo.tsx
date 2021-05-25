import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Modal, Portal, Title } from "react-native-paper";
import Button from "../../components/Button";
import { Colors, DETAILED_GOAL } from "../../constants";

export default function GoalInfo(props) {
  const { params } = props.route;
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Цель</Text>
      <Title style={styles.text}>{params.title}</Title>
      <Text style={styles.description}>{params.fullDescription}</Text>
      <View style={styles.card}>
        <Text style={styles.bold}>Правила игры.</Text>
        <Text style={styles.cardText}>{params.goal}</Text>
      </View>

      <Button
        onPress={() => navigation.replace(DETAILED_GOAL, params)}
        style={styles.button}
        textColor="#fff"
        backgroundColor="#FF8181"
        title="Давай приступим"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: Colors.light.header,
  },
  button: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  text: {
    textAlign: "center",
    color: "#ffffff",
    paddingHorizontal: 20,
  },
  description: {
    textAlign: "center",
    color: "#ffffff",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  bold: {
    fontWeight: "bold",
    textAlign: "center",
  },
  cardText: {
    marginTop: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 15,
    padding: 20,
    borderRadius: 30,
  },
});
