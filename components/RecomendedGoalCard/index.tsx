import {
  ImageBackground,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
  Text,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles";
import { Colors, Button, Title } from "react-native-paper";
import Progress from "../Progress";

export interface GoalProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  duration: number;
  complete_days?: number;
  fullDescription: string;
  rules_description: string;
  preview_description: string;
  motivation_description: string;
  status?: string;
  id: string;
  goal: string;
  howItWorks: string;
  buttonText: string;
  background: string;
  description?: string;
  onPress?: any;
}

export default function RecomendedGoalCard({
  style,
  title,
  complete_days = 20,
  duration = 60,
  description = "",
  onPress,
  status,
}: GoalProps) {
  const active = status === "active";
  const [translatedTitle, setTranslatedTitle] = useState();
  const ProgressView = () => (
    <View style={styles.progressBar}>
      <View style={styles.progressInfo}>
        <Text style={styles.text}>{complete_days} дней уже пройдено</Text>
        <Text style={styles.percent}>{`${Math.round(
          (complete_days / duration) * 100
        )}%`}</Text>
      </View>

      <Progress value={complete_days} />
    </View>
  );

  const Status = useCallback(() => {
    switch (status) {
      case "active":
        return <Text style={styles.inProgress}>В работе</Text>;
      case "failed":
        return <Text style={styles.failed}>В работе</Text>;

      default:
        return <View />;
    }
  }, [status]);

  const Description = () => (
    <View>
      <Text numberOfLines={4} style={styles.description}>
        {description}
      </Text>
    </View>
  );
  return (
    <View style={[styles.container, style]}>
      <Status />
      <View style={styles.card}>
        <Title numberOfLines={1} style={styles.title}>
          {title}
        </Title>
        <Text style={styles.subtitle}>{duration} дней</Text>
        {active ? <ProgressView /> : <Description />}
      </View>
      <TouchableOpacity style={{ width: 180, marginTop: -20, marginLeft: 20 }}>
        <Button
          icon="menu"
          color="white"
          style={{ opacity: 1, borderRadius: 8 }}
          mode="contained"
          onPress={onPress}
        >
          Просмотреть
        </Button>
      </TouchableOpacity>
      <Image
        source={require("../../assets/images/person.png")}
        style={{
          height: 91,
          width: 65,
          alignSelf: "flex-end",
          marginTop: -90,
          marginRight: 20,
        }}
      />
    </View>
  );
}
