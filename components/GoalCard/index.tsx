import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Caption } from "react-native-paper";
import { RANDOM_IMAGE, RANDOM_USER_URL } from "../../constants";
import Progress from "../Progress";
import styles from "./styles";
import { Text } from "../Themed";

export default function GoalCard(card: any) {
  return (
    <TouchableOpacity onPress={card.onPress} style={styles.card}>
      <View style={styles.mainInfo}>
        <Image style={styles.image} source={{ uri: RANDOM_IMAGE }} />
        <View>
          <Text>{card.title}</Text>
          <Caption style={{ width: 200 }}>
            • Срок {card.deadline} дней • Сложность {card.dificulty}
          </Caption>
        </View>
      </View>
      <Progress value={card.progress} />
    </TouchableOpacity>
  );
}
