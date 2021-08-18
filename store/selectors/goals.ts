import { createSelector } from "reselect";
import { RootState } from "../../types/store";

const goalsSelector = (state: RootState) => state.goalsReducer;

const loaderSelector = (state: RootState) => state.loadersReducer;

export default createSelector(
  goalsSelector,

  loaderSelector,
  (goalsSelector, { goals: isGoalsLoading, userGoals: isUserGoalsLoading }) => {
    return {
      goalsSelector,
      isGoalsLoading,
      isUserGoalsLoading,
    };
  }
);
