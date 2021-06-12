import {
  SET_CURRENT_GOAL,
  SET_CURRENT_GOAL_FAIL,
  GOALS_SUCCESS,
  GOALS_FAIL,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
  USER_GOALS_SUCCESS,
  USER_GOALS_FAIL,
  TASK_FAIL,
  TASK_SUCCESS,
} from "../action-types";

const initialState = {
  goals: [],
  userGoals: [],
  currentGoal: {},
  currentTask: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GOALS_SUCCESS:
      return { ...state, goals: action.payload };
    case USER_GOALS_SUCCESS:
      return { ...state, userGoals: action.payload };
    case SET_CURRENT_GOAL:
      return { ...state, currentGoal: action.payload };

    case TASK_SUCCESS:
      return { ...state, currentTask: action.payload };
    case USER_GOALS_FAIL:
    case UPDATE_TASK_FAIL:
    case TASK_FAIL:
    case SET_CURRENT_GOAL_FAIL:
    case GOALS_FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
