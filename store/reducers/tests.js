import {
  INCREMENT_CURRENT_QUESTION,
  INCREMENT_CURRENT_CATEGORY,
  MAIN_TEST_FAIL,
  MAIN_TEST_SUCCESS,
  INCREMENT_CURRENT_TEST_FAIL,
  SECOND_TEST_FAIL,
  SECOND_TEST_LOAD,
  SECOND_TEST_SUCCESS,
} from "../action-types";

const initialState = {
  currentTest: {},
  currentCategoryIndex: 0,
  currentQuestionIndex: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MAIN_TEST_SUCCESS:
    case SECOND_TEST_SUCCESS:
      return {
        ...state,
        currentTest: { ...state.currentTest, ...action.payload },
      };
    case INCREMENT_CURRENT_QUESTION:
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case INCREMENT_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategoryIndex: state.currentCategoryIndex + 1,
        currentQuestionIndex: 0,
      };
    case INCREMENT_CURRENT_TEST_FAIL:
    case MAIN_TEST_FAIL:
    case SECOND_TEST_FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
