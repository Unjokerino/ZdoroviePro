export interface TestState {
  currentTest: Test;
  currentCategoryIndex: number;
  currentQuestionIndex: number;
}

export interface Test {
  id: string;
  name: string;
  text: string;
  categories: {
    categories: Category[];
    order: number;
  }[];
}

export interface Category {
  name: string;
  text: string;
  icon: string;
  type: "video" | "image";
  icon_type: "video" | "image";
  count_question: number;
  order: number;
  questions: {
    question: Question[];
    order: number;
  };
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
  select: {
    group_options: [];
    id: string;
    option_custom: null | string;
    options: Option[];
    type: Type;
  };
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
  Question_Extras: Question[];
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
}
