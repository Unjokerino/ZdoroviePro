import {
  ImageBackground,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
  Text,
} from "react-native";
import React from "react";
import styles from "./styles";
import { Colors, Button, Title } from "react-native-paper";
import Progress from "../Progress";

export interface GoalProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  duration: number;
  progress?: number;
  fullDescription: string;
  goal: string;
  howItWorks: string;
  buttonText: string;
  background: string;
  description?: string;
  onPress?: any;
  active?: boolean;
}

export default function RecomendedGoalCard({
  style,
  title,
  progress = 20,
  duration = 60,
  description = "",
  onPress,
  active,
}: GoalProps) {
  const ProgressView = () => (
    <View style={styles.progressBar}>
      <View style={styles.progressInfo}>
        <Text style={styles.text}>{progress} дней уже пройдено</Text>
        <Text style={styles.percent}>{`${Math.round(
          (progress / duration) * 100
        )}%`}</Text>
      </View>

      <Progress value={progress} />
    </View>
  );
  const Description = () => (
    <View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
  return (
    <View style={[styles.container, style]}>
      {active && <Text style={styles.inProgress}>В работе</Text>}
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
