import {
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
} from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import styles from "./styles";
import { Title } from "react-native-paper";
import Progress from "../Progress";
import { Goal } from "../../types/store/goals";
import { Text } from "../Themed";
import Button from "../Button";

export interface GoalProps extends Goal {
  style?: StyleProp<ViewStyle>;
  title: string;
  duration: number;
  complete_days?: number;
  fullDescription: string;
  rules_description: string;
  preview_description: string;
  motivation_description: string;
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
  purpose,
  description = "",
  onPress,
  status,
}: GoalProps) {
  const active = status === "active";
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
      case "complete":
        return <Text style={styles.done}>Выполнено</Text>;
      case "active":
        return <Text style={styles.inProgress}>В работе</Text>;
      case "inactive":
        return <Text style={styles.inactive}>Не активна</Text>;
      case "failed":
        return <Text style={styles.failed}>Провалено</Text>;

      default:
        return <View />;
    }
  }, [status]);

  const Description = () => (
    <View>
      <Text numberOfLines={4} style={styles.description}>
        {purpose?.description || description}
      </Text>
    </View>
  );

  const buttonMessage = useMemo(() => {
    switch (status) {
      case "active":
        return "Перейти";
      case "inactive":
        return "Активировать";
      default:
        return "Просмотреть";
    }
  }, [purpose, status]);

  return (
    <View style={[styles.container, style]}>
      <Status />
      <View style={styles.card}>
        <Title numberOfLines={1} style={styles.title}>
          {purpose?.title || title}
        </Title>
        <Text style={styles.subtitle}>{duration} дней</Text>
        {active ? <ProgressView /> : <Description />}
      </View>
      <View style={{ width: 180, marginTop: -20, marginLeft: 20 }}>
        <Button
          icon="menu"
          textColor="#000"
          backgroundColor="white"
          style={{
            opacity: 1,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 6,
          }}
          mode="contained"
          onPress={onPress}
          title={buttonMessage}
        />
      </View>
      <Image
        source={require("../../assets/images/person.png")}
        style={styles.personImage}
      />
    </View>
  );
}
