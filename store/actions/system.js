import { PRELOAD_DONE, SHOW_SNACK_BAR, HIDE_SNACK_BAR } from "../action-types";

export const preload = () => ({
  type: PRELOAD_DONE,
});

export const showSnackBar = (payload) => ({ type: SHOW_SNACK_BAR, payload });
export const hideSnackBar = () => ({ type: HIDE_SNACK_BAR });
