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
        categories: currentTest.categories?.map((category) => ({
          ...category,
          questions: category.questions?.map((question) => ({
            ...question,
            options: question.Options,
            questionsExtra: question?.Question_Extras,
          })),
        })),
      },
      currentCategoryIndex,
      currentQuestionIndex,
      isLoading,
    };
  }
);
