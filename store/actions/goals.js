import { getPurposeId } from "../../utils/getPurposeId";
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
  TASK_FAIL,
  START_USER_GOAL_LOAD,
  START_USER_GOAL_SUCCESS,
  START_USER_GOAL_FAIL,
  UPDATE_USER_GOAL_LOAD,
  UPDATE_USER_GOAL_SUCCESS,
  UPDATE_USER_GOAL_FAIL,
  FAIL_USER_GOAL_LOAD,
  FAIL_USER_GOAL_SUCCESS,
  FAIL_USER_GOAL_FAIL,
  CREATE_FIRST_TASK_LOAD,
  CREATE_FIRST_TASK_SUCCESS,
  CREATE_FIRST_TASK_FAIL,
} from "../action-types";

export const getGoals = () => async (dispatch) => {
  dispatch({ type: GOALS_LOAD });
  try {
    const id = store.getState().authReducer.identity.id;
    const { data } = await api.goals.fetchGoals(id);
    dispatch({ type: GOALS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHOW_SNACK_BAR, payload: error.message });
    dispatch({ type: GOALS_FAIL, error });
  }
};

export const failUserGoal = () => async (dispatch) => {
  dispatch({ type: FAIL_USER_GOAL_LOAD });
  try {
    const id = store.getState().authReducer.identity.id;
    const purposeId = getPurposeId();
    const response = await api.goals.failUserGoal(id, purposeId);
    if (response?.status !== 200)
      throw new Error(response?.statusText || "Ошибка закрытия задачи");
    dispatch(getUserGoals());
    dispatch({ type: FAIL_USER_GOAL_SUCCESS });
  } catch (error) {
    dispatch({ type: SHOW_SNACK_BAR, payload: error.message });
    dispatch({ type: FAIL_USER_GOAL_FAIL, error });
  }
};

export const updateUserGoal = (status) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_GOAL_LOAD });
  try {
    const id = store.getState().authReducer.identity.id;
    const purposeId = getPurposeId();
    await api.goals.updateUserGoal(id, purposeId, status);
    dispatch({ type: UPDATE_USER_GOAL_SUCCESS });
    dispatch(getUserGoals());
  } catch (error) {
    dispatch({ type: SHOW_SNACK_BAR, payload: error.message });
    dispatch({ type: UPDATE_USER_GOAL_FAIL, error });
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

export const startUserGoal = () => async (dispatch) => {
  dispatch({ type: START_USER_GOAL_LOAD });
  try {
    const userId = store.getState().authReducer.identity.id;
    const purposeId = getPurposeId();
    await api.goals.startUserGoal({ userId, purposeId });
    dispatch({ type: START_USER_GOAL_SUCCESS });
    dispatch(getUserGoals());
  } catch (error) {
    dispatch({
      type: SHOW_SNACK_BAR,
      payload: error.response?.data?.message || error.message,
    });
    dispatch({ type: START_USER_GOAL_FAIL, error });
  }
};

export const createFirstTask = () => async (dispatch) => {
  dispatch({ type: CREATE_FIRST_TASK_LOAD });
  try {
    const id = store.getState().authReducer.identity.id;
    const purposeId = getPurposeId();
    const response = await api.tasks.createFirstTask(id, purposeId);
    if (response?.status !== 200)
      throw new Error(response?.statusText || "Ошибка cоздания первой задачи");
    dispatch({ type: CREATE_FIRST_TASK_SUCCESS });
  } catch (error) {
    dispatch({ type: SHOW_SNACK_BAR, payload: error.message });
    dispatch({ type: CREATE_FIRST_TASK_FAIL, error });
  }
};

export const getUserTask = () => async (dispatch) => {
  dispatch({ type: TASK_LOAD });
  try {
    const id = store.getState().authReducer.identity.id;
    const purposeId = getPurposeId();
    const { data } = await api.tasks.fetchTasks(id, purposeId);
    if (data.length === 0) {
      dispatch(createFirstTask());
    }
    dispatch({ type: TASK_SUCCESS, payload: data[0] });
  } catch (error) {
    dispatch({ type: SHOW_SNACK_BAR, payload: error.message });
    dispatch({ type: TASK_FAIL, error });
  }
};

export const updateTask = (update) => async (dispatch) => {
  dispatch({ type: UPDATE_TASK_LOAD });
  try {
    const id = store.getState().authReducer.identity.id;
    const purposeId = getPurposeId();
    await api.tasks.updateTask(id, purposeId, update);
    dispatch(getUserGoals());
    dispatch({ type: UPDATE_TASK_SUCCESS });
  } catch (error) {
    dispatch(getUserGoals());
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
