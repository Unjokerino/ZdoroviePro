import React, { useEffect } from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import { Paragraph, Title } from "../../components/Themed";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles";

import CustomLayout from "../../components/CustomLayout";
import Icons from "../../assets/icons";
import Button from "../../components/Button";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { GOALS_SCREEN } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HealthProfileScreen({ navigation }) {
  const dispatch = useDispatch();

  const startGoals = () => {
    AsyncStorage.setItem("testDone", "true");
    navigation.replace(GOALS_SCREEN);
  };

  return (
    <CustomLayout openDrawer={navigation.openDrawer}>
      <View style={styles.container}>
        <View style={styles.graphContainer}>
          <Icons.Graph />
        </View>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Icons.Activity />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.title}>Физическая активность</Text>
            <Text style={styles.subtitle}>Высокая физическая активность</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={[styles.iconContainer, { backgroundColor: "#4DD0E1" }]}>
            <Icons.Food />
          </View>
          <View style={[styles.cardInfo]}>
            <Text style={styles.title}>Питание</Text>
            <Text style={styles.subtitle}>Сбалансирование питание</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={[styles.iconContainer, { backgroundColor: "#6360FF" }]}>
            <Icons.Smoking />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.title}>Курение</Text>
            <Text style={styles.subtitle}>Никотиновой зависимости нет</Text>
          </View>
        </View>
        <Button
          onPress={startGoals}
          style={{ marginVertical: 20 }}
          textColor="#fff"
          backgroundColor="#6360FF"
          title="Выбрать цели"
        />
      </View>
    </CustomLayout>
  );
}
