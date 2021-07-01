import { path, pathOr } from "ramda";
import store from "..";
import api from "../../services/api";
import {
  GOALS_FAIL,
  GOALS_LOAD,
  GOALS_SUCCESS,
  SHOW_SNACK_BAR,
  SET_CURRENT_GOAL,
  SET_CURRENT_GOAL_FAIL,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
  UPDATE_TASK_LOAD,
  USER_GOALS_LOAD,
  USER_GOALS_SUCCESS,
  USER_GOALS_FAIL,
  TASK_LOAD,
  TASK_SUCCESS,
} from "../action-types";

export const getGoals = () => async (dispatch) => {
  dispatch({ type: GOALS_LOAD });
  try {
    const { data } = await api.goals.fetchGoals();
    dispatch({ type: GOALS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHOW_SNACK_BAR, payload: error.message });
    dispatch({ type: GOALS_FAIL, error });
  }
};

export const getUserGoals = () => async (dispatch, state) => {
  dispatch({ type: USER_GOALS_LOAD });
  try {
    const id = store.getState().authReducer.identity.id;

    const { data } = await api.users.fetchGoals(id);

    dispatch({ type: USER_GOALS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHOW_SNACK_BAR, payload: error.message });
    dispatch({ type: USER_GOALS_FAIL, error });
  }
};

export const getUserTask = () => async (dispatch, state) => {
  dispatch({ type: TASK_LOAD });
  try {
    const id = store.getState().authReducer.identity.id;
    const { data } = await api.tasks.fetchTasks(id);

    dispatch({ type: TASK_SUCCESS, payload: data[0] });
  } catch (error) {
    dispatch({ type: SHOW_SNACK_BAR, payload: error.message });
    dispatch({ type: TASK_SUCCESS, error });
  }
};

export const updateTask = (update) => async (dispatch, state) => {
  dispatch({ type: UPDATE_TASK_LOAD });
  try {
    const id = store.getState().goalsReducer.currentTask.id;

    const response = await api.tasks.updateTask(id, update);
    if (response.status !== 200) throw Error(response.status);
    dispatch({ type: UPDATE_TASK_SUCCESS });
  } catch (error) {
    dispatch({ type: SHOW_SNACK_BAR, payload: error.message });
    dispatch({ type: UPDATE_TASK_FAIL, error });
  }
};

export const setCurrentGoal = (goal) => async (dispatch, state) => {
  try {
    dispatch({ type: SET_CURRENT_GOAL, payload: goal });
  } catch (error) {
    dispatch({ type: SHOW_SNACK_BAR, payload: error.message });
    dispatch({ type: SET_CURRENT_GOAL_FAIL, error });
  }
};
