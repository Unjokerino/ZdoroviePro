import { createSelector } from "reselect";
import { RootState } from "../../types/store";

const authSelector = (state: RootState) => state.authReducer;

export default createSelector(authSelector, ({ identity }) => {
  return {
    identity,
    isLoading: false,
  };
});
