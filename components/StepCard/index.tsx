import React from "react";
import {
  View,
  Image,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { Badge, Chip, Paragraph, Title } from "react-native-paper";
import styles from "./styles";
import { Text } from "../../components/Themed";
import Progress from "../Progress";

interface Props {
  style: StyleProp<ViewStyle>;
  title: string;
  text: string;
  progress: number;
  image: string;
}

export default function StepCard({
  style,
  title,
  text,
  progress,
  image,
}: Props) {
  return (
    <TouchableOpacity style={[styles.card, style]}>
      <View style={styles.mainInfo}>
        <View style={styles.textContainer}>
          <Title style={styles.title}>{title}</Title>
          <Paragraph style={styles.text}>{text}</Paragraph>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
      <Progress value={progress} />
      <View style={styles.footer}>
        {progress === 100 ? (
          <Chip>Выполнено</Chip>
        ) : (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.footerText}>Текущий прогресс </Text>
            <Text>{progress}%</Text>
          </View>
        )}
        <Text style={styles.footerText}>Пройти позже </Text>
      </View>
    </TouchableOpacity>
  );
}
