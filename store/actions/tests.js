import { path, pathOr } from "ramda";
import api from "../../services/api";
import {
  MAIN_TEST_LOAD,
  MAIN_TEST_FAIL,
  MAIN_TEST_SUCCESS,
  INCREMENT_CURRENT_CATEGORY,
  INCREMENT_CURRENT_QUESTION,
  SECOND_TEST_FAIL,
  SECOND_TEST_LOAD,
  SECOND_TEST_SUCCESS,
  SHOW_SNACK_BAR,
} from "../action-types";

export const getMainTest = () => async (dispatch) => {
  dispatch({ type: MAIN_TEST_LOAD });
  try {
    const { data } = await api.tests.fetchMainTest();
    dispatch({ type: MAIN_TEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHOW_SNACK_BAR, payload: error.message });
    dispatch({ type: MAIN_TEST_FAIL, error });
  }
};

export const getSecondTest = () => async (dispatch) => {
  dispatch({ type: SECOND_TEST_LOAD });
  try {
    const { data } = await api.tests.fetchSecondTest();
    dispatch({ type: SECOND_TEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHOW_SNACK_BAR, payload: error.message });
    dispatch({ type: SECOND_TEST_FAIL, error });
  }
};

export const incrementCurrentTest = () => (dispatch, getState) => {
  try {
    const {
      testsReducer: { currentTest, currentCategoryIndex, currentQuestionIndex },
    } = getState();
    const currentCategories = currentTest.categories || [];
    const currentQuestions = pathOr(
      [],
      ["categories", currentCategoryIndex, "questions"],
      currentTest
    );

    if (currentQuestions.length - 1 <= currentQuestionIndex) {
      if (currentCategories.length - 1 >= currentCategoryIndex) {
        dispatch({ type: INCREMENT_CURRENT_CATEGORY });
      }
    } else {
      dispatch({ type: INCREMENT_CURRENT_QUESTION });
    }
  } catch (error) {
    dispatch({ type: INCREMENT_CURRENT_QUESTION });
  }
};
