//@ts-ignore
import store from "../store";

export const getPurposeId = () => {
  return (
    store.getState().goalsReducer.currentGoal.purpose?.id ||
    store.getState().goalsReducer.currentGoal.id
  );
};
