import { createSelector } from "reselect";
import { RootState } from "../../types/store";

const testSelector = (state: RootState) => state.testsReducer;
const loaderSelector = (state: RootState) => state.loadersReducer;

export default createSelector(
  testSelector,
  loaderSelector,
  (
    { currentTest, currentCategoryIndex, currentQuestionIndex },
    { test: isLoading }
  ) => {
    return {
      currentTest: {
        ...currentTest,
        categories: currentTest.categories?.sort((a, b) => a.order - b.order),
      },
      currentCategoryIndex,
      currentQuestionIndex,
      isLoading,
    };
  }
);
