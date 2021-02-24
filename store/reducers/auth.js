import {
  GET_SIGN_IN_INFO,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT,
} from "../action-types";

const initialState = {
  identity: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SIGN_IN_INFO:
      return { ...state, ...action.identity };
    case SIGN_IN_SUCCESS:
      return { ...state, identity: action.payload };
    case SIGN_IN_FAIL:
      return { ...state, error: action.error };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
