export interface TestState {
  currentTest: Test;
  currentCategoryIndex: number;
  currentQuestionIndex: number;
}

export interface Test {
  id: string;
  name: string;
  text: string;
  categories: Category[];
}

export interface Category {
  name: string;
  text: string;
  icon: string;
  type: "Video" | "Image";
  count_question: number;
  order: number;
  questions: Question[];
}
export interface Option {
  id: string;
  text: string;
}

export interface Question {
  Question_Extras: QuestionsExtra[];
  text: null | string;
  title: string;
  icon: Icon;
  order?: number;
  field?: null | string;
  type: Type;
  options?: Option[];
  Options?: Option[];
  questionsExtra: QuestionsExtra[];
  conditions: Condition[];
}

export interface Condition {
  text: string;
  next_question: number | null;
  questionsExtra: any[];
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
  Custom = "custom",
  Radio = "radio",
  CustomVariable = "custom-variable",
}
