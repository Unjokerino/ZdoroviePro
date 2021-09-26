import {
  INCREMENT_CURRENT_QUESTION,
  INCREMENT_CURRENT_CATEGORY,
  MAIN_TEST_FAIL,
  MAIN_TEST_SUCCESS,
  INCREMENT_CURRENT_TEST_FAIL,
  SECOND_TEST_FAIL,
  SIGN_OUT,
  SECOND_TEST_SUCCESS,
  SKIP_CATEGORY,
  DECREMENT_CURRENT_CATEGORY,
  DECREMENT_CURRENT_QUESTION,
  DECREMENT_CURRENT_TEST_FAIL,
} from "../action-types";

const initialState = {
  currentTest: {},
  answers: [],
  currentCategoryIndex: 0,
  currentQuestionIndex: 0,
};

const getAnswers = (state = initialState, action) => {
  const answers = [...state.answers];
  if (!answers[state.currentCategoryIndex]) {
    answers[state.currentCategoryIndex] = [];
  }
  answers[state.currentCategoryIndex][state.currentQuestionIndex] =
    action.payload;
  return answers;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MAIN_TEST_SUCCESS:
    case SECOND_TEST_SUCCESS:
      return {
        ...state,
        currentTest: { ...action.payload },
      };

    case INCREMENT_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        answers: getAnswers(state, action),
      };
    case INCREMENT_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategoryIndex: state.currentCategoryIndex + 1,
        currentQuestionIndex: 0,
        answers: getAnswers(state, action),
      };
    case DECREMENT_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategoryIndex: state.currentCategoryIndex - 1,
        currentQuestionIndex: payload,
      };
    case DECREMENT_CURRENT_QUESTION:
      return { ...state, currentQuestionIndex: state.currentQuestionIndex - 1 };
    case DECREMENT_CURRENT_TEST_FAIL:
    case INCREMENT_CURRENT_TEST_FAIL:
    case MAIN_TEST_FAIL:
    case SECOND_TEST_FAIL:
      return { ...state, error: action.error };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
