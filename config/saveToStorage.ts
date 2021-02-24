import { SIGN_IN_SUCCESS } from "../store/action-types";

export default (action: { type: string }) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return ["authReducer"];
    default:
      return [];
  }
};
