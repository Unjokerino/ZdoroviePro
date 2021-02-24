import AsyncStorage from "@react-native-async-storage/async-storage";
import { path, pathOr } from "ramda";
import api from "../../services/api";
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
} from "../action-types";
import { preload } from "./system";

export const getSignInInfo = () => async (dispatch) => {
  const authReducer = await AsyncStorage.getItem("authReducer");
  dispatch({
    type: GET_SIGN_IN_INFO,
    identity: authReducer ? JSON.parse(authReducer) : {},
  });
};

export const signIn = ({ email, password }) => async (dispatch) => {
  dispatch({ type: SIGN_IN_LOAD });
  try {
    const { data } = await api.auth.signIn({ email, password });
    dispatch({ type: SIGN_IN_SUCCESS, payload: data });
  } catch (error) {
    const errorMsg = pathOr(
      "",
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

export const signUp = ({ email, password }) => async (dispatch) => {
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
  dispatch({ type: SIGN_OUT });
  dispatch(preload());
};
