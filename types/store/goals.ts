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

export interface Event {
  created_date: string;
  id: string;
  points: null | number;
  title: string;
  type: string;
}

export interface Goal {
  event_history: Event[];
  purpose?: {
    complete_days: number;
    duration: number;
    description: string;
    id: string;
    motivation_description?: string;
    preview_description?: string;
    rules_description?: string;
    title: string;
  };
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
