import { Answers } from "../../screens/TestScreen";

export interface TestState {
  answers: Answers[];
  currentTest: Test;
  currentCategoryIndex: number;
  currentQuestionIndex: number;
}

export interface Test {
  id: string;
  name: string;
  text: string;
  description: string;
  icon: {
    icon_type: string;
    id: string;
    name: string;
  };
  categories: {
    category: Category;
    order: number;
  }[];
}

export interface Category {
  id: string;
  name: string;
  text: string;
  icon: {
    icon_type: string;
    id: string;
    name: string;
  };
  questions: {
    question: Question[];
    order: number;
  }[];
}
export interface Option {
  id: string;
  next_question?: null | number;
  option_custom?: {
    field_text: string;
    id: string;
  };
  type: "button" | "radio";
  order: number;
  points: number;
  title: string;
  text: string;
}

export interface Question {
  Question_Extras?: QuestionsExtra[];
  extra_questions?: QuestionsExtra[];
  text?: null | string;
  title?: string;
  icon?: {
    icon_type: string;
    id: string;
    name: string;
  };
  select?: Select;
  questionsExtra?: QuestionsExtra[];
  conditions?: Condition[];
}

export interface Select {
  group_options: {
    id: string;
    options: Option[];
    title: string;
  }[];
  id: string;
  option_custom: null | string;
  options: Option[];
  type: Type;
}

export interface Condition {
  text: string;
  next_question: number | null;
  questionsExtra: any[];
  Question_Extras: Question[];
  title?: string;
  order?: number;
  type?: string;
}

export enum Icon {
  Icon1 = "icon 1",
}

export interface QuestionsExtra {
  icon: Icon | null;
  text: null | string;
  field?: null | string;
  type: Type;
  options: any[];
}

export enum Type {
  Conditional = "conditional",
  CustomConditional = "custom-conditional",
  Variable = "variable",
  Variants = "variants",
  CustomSelectConditional = "custom-select-conditional",
  Custom = "custom",
  Radio = "radio",
  CustomVariable = "custom-variable",
  ConditionalOptions = "conditional-options",
  GroupOptions = "group-options",
  CustomVariants = "custom-variants",
}
