import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Caption } from "react-native-paper";
import { Colors } from "../../constants";
import styles from "./styles";

export default function MessageCard({
  title,
  description,
  onPress,
}: {
  title: string;
  description: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.infoContainer}>
        <Caption style={styles.title}>{title}</Caption>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.redCircle} />
    </TouchableOpacity>
  );
}
