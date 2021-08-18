import AsyncStorage from "@react-native-async-storage/async-storage";
import { pathOr } from "ramda";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

import {
  SIGN_IN_LOAD,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_UP_LOAD,
  SIGN_UP_SUCCESS,
  GET_SIGN_IN_INFO,
  SIGN_UP_FAIL,
  SIGN_OUT,
  SHOW_SNACK_BAR,
  FETCH_USER_SUCCESS,
  FETCH_USER_LOAD,
  FETCH_USER_FAIL,
} from "../action-types";
import { preload } from "./system";
import store from "..";

export const getSignInInfo = () => async (dispatch) => {
  const authReducer = await AsyncStorage.getItem("authReducer");
  dispatch({
    type: GET_SIGN_IN_INFO,
    identity: authReducer ? JSON.parse(authReducer) : {},
  });
};

export const signIn =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch({ type: SIGN_IN_LOAD });
    try {
      const { data } = await api.auth.signIn({ email, password });
      const decoded = jwt_decode(data.access_token);
      const identity = { ...decoded, ...data };
      dispatch({ type: SIGN_IN_SUCCESS, payload: identity });
    } catch (error) {
      const errorMsg = pathOr(
        error,
        ["response", "data", "errors", 0, "msg"],
        error
      );
      dispatch({
        type: SHOW_SNACK_BAR,
        payload: "Ошибка авторизации" + errorMsg,
      });
      dispatch({ type: SIGN_IN_FAIL, error });
    }
  };

export const fetchUser = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_LOAD });
  try {
    const id = store.getState().authReducer.identity.id;
    const { data } = await api.users.fetchUser(id);

    dispatch({ type: FETCH_USER_SUCCESS, payload: data });
  } catch (error) {
    const errorMsg = pathOr(
      "",
      ["response", "data", "errors", 0, "msg"],
      error
    );
    dispatch({
      type: SHOW_SNACK_BAR,
      payload: "Ошибка получения данных пользователя " + errorMsg,
    });
    dispatch({ type: FETCH_USER_FAIL, error });
  }
};

export const signUp =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch({ type: SIGN_UP_LOAD });
    try {
      const { data } = await api.auth.signUp({ email, password });

      dispatch({ type: SIGN_UP_SUCCESS, payload: data });
      dispatch(signIn({ email, password }));
    } catch (error) {
      const errorMsg = pathOr(
        "",
        ["response", "data", "errors", 0, "msg"],
        error
      );
      dispatch({
        type: SHOW_SNACK_BAR,
        payload: "Ошибка регистрации " + errorMsg,
      });
      dispatch({ type: SIGN_UP_FAIL, error });
    }
  };

export const signOut = () => async (dispatch) => {
  await AsyncStorage.removeItem("authReducer");
  dispatch({ type: SIGN_OUT });
  dispatch(preload());
};
