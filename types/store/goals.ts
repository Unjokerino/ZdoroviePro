import { StyleProp, ViewStyle } from "react-native";

export interface GoalsProps {
  goals: Goal[];
  userGoals: Goal[];
  currentGoal: Goal;
  currentTask: Task;
}

export interface Task {
  id: string;
}

export interface Goal {
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
