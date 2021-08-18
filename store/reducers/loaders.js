import {
  MAIN_TEST_FAIL,
  MAIN_TEST_LOAD,
  MAIN_TEST_SUCCESS,
  SECOND_TEST_FAIL,
  SECOND_TEST_LOAD,
  SECOND_TEST_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_IN_LOAD,
  SIGN_IN_SUCCESS,
  USER_GOALS_LOAD,
  USER_GOALS_FAIL,
  UPDATE_USER_GOAL_FAIL,
  UPDATE_USER_GOAL_LOAD,
  UPDATE_USER_GOAL_SUCCESS,
  USER_GOALS_SUCCESS,
} from "../action-types";

const initialState = {
  test: false,
  auth: false,
  goals: false,
  userGoals: false,
  userTask: false,
};

const set = (value, state) => (loader) => ({ ...state, [loader]: value });

export default (state = initialState, action) => {
  const on = set(true, state);
  const off = set(false, state);
  switch (action.type) {
    case SIGN_IN_SUCCESS:
    case SIGN_IN_FAIL:
      return off("auth");
    case SIGN_IN_LOAD:
      return on("auth");
    case MAIN_TEST_LOAD:
    case SECOND_TEST_LOAD:
      return on("test");
    case USER_GOALS_LOAD:
    case UPDATE_USER_GOAL_LOAD:
      return on("userGoals");
    case USER_GOALS_SUCCESS:
    case UPDATE_USER_GOAL_SUCCESS:
    case USER_GOALS_FAIL:
    case UPDATE_USER_GOAL_FAIL:
      return off("userGoals");
    case SECOND_TEST_FAIL:
    case SECOND_TEST_SUCCESS:
    case MAIN_TEST_SUCCESS:
    case MAIN_TEST_FAIL:
      return off("test");
    default:
      return state;
  }
};
