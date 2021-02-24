import {
  MAIN_TEST_FAIL,
  MAIN_TEST_LOAD,
  MAIN_TEST_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_IN_LOAD,
  SIGN_IN_SUCCESS,
} from "../action-types";

const initialState = {
  test: false,
  auth: false,
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
      return on("test");
    case MAIN_TEST_SUCCESS:
    case MAIN_TEST_FAIL:
      return off("test");
    default:
      return state;
  }
};