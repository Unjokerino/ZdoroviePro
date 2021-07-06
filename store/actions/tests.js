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
  SKIP_CATEGORY,
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
    const response = await api.tests.fetchSecondTest();
    const data = response?.data;
    if (response?.status !== 200)
      throw new Error(
        response?.statusText || "Ошибка получения теста, попробуй позже"
      );
    dispatch({ type: SECOND_TEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHOW_SNACK_BAR, payload: error.message });
    dispatch({ type: SECOND_TEST_FAIL, error });
  }
};

export const skipCategory = (answer) => (dispatch) => {
  dispatch({ type: INCREMENT_CURRENT_CATEGORY, payload: answer });
};

export const incrementCurrentTest = (answer) => (dispatch, getState) => {
  try {
    const {
      testsReducer: { currentTest, currentCategoryIndex, currentQuestionIndex },
    } = getState();
    const currentCategories = currentTest.categories || [];
    const currentQuestions = pathOr(
      [],
      ["categories", currentCategoryIndex, "category", "questions"],
      currentTest
    );

    const payload = {
      answer: {
        ...answer,
        title: currentQuestions[currentQuestionIndex].question.text,
      },
      category: currentTest.categories[currentCategoryIndex].category.text,
    };

    if (currentQuestions.length - 1 <= currentQuestionIndex) {
      if (currentCategories.length - 1 >= currentCategoryIndex) {
        dispatch({ type: INCREMENT_CURRENT_CATEGORY, payload });
      }
    } else {
      dispatch({ type: INCREMENT_CURRENT_QUESTION, payload });
    }
  } catch (error) {
    dispatch({ type: INCREMENT_CURRENT_QUESTION });
  }
};
