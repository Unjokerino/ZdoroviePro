import {
  ImageBackground,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleSheet,
} from "react-native";
import React from "react";
import styles from "./styles";
import { Colors, Button, Title } from "react-native-paper";

interface Props {
  style?: StyleProp<ViewStyle>;
  title: string;

  image: string;
  onPress: any;
}

export default function RecomendedGoalCard({
  style,
  title,
  image,
  onPress,
}: Props) {
  return (
    <View style={[styles.container, style]}>
      <ImageBackground style={StyleSheet.absoluteFill} source={{ uri: image }}>
        <Title style={styles.title}>{title}</Title>
      </ImageBackground>
      <TouchableOpacity style={{ position: "absolute", bottom: 15, right: 10 }}>
        <Button
          icon="play"
          color="white"
          style={{ opacity: 0.7 }}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Задать цель
        </Button>
      </TouchableOpacity>
    </View>
  );
}
