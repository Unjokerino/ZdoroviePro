import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "../components/Themed";
import Icons from "../assets/icons";
import Button from "../components/Button";
import CategoryGraph from "../components/CategoryGraph";
import CategoryResult from "../components/CategoryResult";
import CustomLayout from "../components/CustomLayout";
import { Title } from "../components/Themed";
import { Colors } from "../constants";
import { Answers } from "./TestScreen";

export default function RecomendationScreen({
  route: {
    params: { answers, index },
  },
}: {
  route: { params: { answers: Answers; index: number } };
}) {
  const navigation = useNavigation();
  const points = answers.reduce((acc, cur) => {
    return cur?.answer?.points ? (acc += cur?.answer?.points) : acc;
  }, 0);
  return (
    <CustomLayout>
      <>
        <View style={[styles.card, { backgroundColor: Colors.light.header }]}>
          <Title style={styles.title}>{answers[0].category}</Title>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={
              CategoryGraph(index, points).result > 50
                ? require("../assets/images/sadGirl.png")
                : require("../assets/images/man.png")
            }
          />
        </View>
        <View style={[styles.card, { backgroundColor: "#fff" }]}>
          <View style={styles.iconContainer}>
            <Icons.Activity />
          </View>
          <Text style={styles.bold}>Это важно знать:</Text>
          <CategoryResult
            style={{ textAlign: "center" }}
            category={index}
            points={points}
          />
        </View>
        <Button
          style={styles.button}
          title="Назад"
          mode="contained"
          onPress={() => navigation.goBack()}
        />
      </>
    </CustomLayout>
  );
}

const styles = StyleSheet.create({
  container: {},
  iconContainer: {
    alignSelf: "center",
    marginBottom: 10,
    width: 49,
    height: 49,
    backgroundColor: "#FF8181",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  button: {
    width: 100,
    alignSelf: "center",
    marginBottom: 30,
  },
  bold: {
    fontWeight: "bold",
    marginBottom: 31,
    textAlign: "center",
  },
  title: {
    color: "#fff",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 272,
  },
  card: {
    borderRadius: 20,
    flex: 1,
    marginTop: 64,
    paddingHorizontal: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    paddingVertical: 38,
  },
});
