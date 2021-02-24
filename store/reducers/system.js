import { HIDE_SNACK_BAR, SHOW_SNACK_BAR } from "../action-types";

const initialState = {
  isEmulator: false,
  osVersion: "",
  snackBarMessage: "",
  shouldShowSnackBar: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SNACK_BAR:
      return {
        ...state,
        shouldShowSnackBar: true,
        snackBarMessage: action.payload,
      };
    case HIDE_SNACK_BAR:
      return {
        ...state,
        shouldShowSnackBar: false,
        snackBarMessage: initialState.snackBarMessage,
      };
    default:
      return state;
  }
};
