import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { GoalProps } from "../../components/RecomendedGoalCard";
import { Colors, DETAILED_GOAL } from "../../constants";
import { RootState } from "../../types/store";
//@ts-ignore
import { startUserGoal } from "../../store/actions";

export default function GoalInfo(props: {
  route: { params: GoalProps };
  navigation;
}) {
  const { navigation } = props;
  const { params } = props.route;
  const dispatch = useDispatch();
  const {
    authReducer: { identity },
  } = useSelector((state: RootState) => state);
  const startTheGoal = async () => {
    dispatch(startUserGoal());

    navigation.replace(DETAILED_GOAL, params);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Цель</Text>
      <Title style={styles.text}>{params.title}</Title>
      <Text style={styles.description}>{params.preview_description}</Text>
      <View style={styles.card}>
        <Text style={styles.bold}>Правила игры.</Text>
        <Text style={styles.cardText}>{params.rules_description}</Text>
      </View>

      <Button
        onPress={startTheGoal}
        style={styles.button}
        mode="contained"
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
