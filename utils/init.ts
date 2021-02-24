import store from "../store";
import { getSignInInfo, preload } from "../store/actions";

export default async () => {
  const { dispatch } = store;
  await dispatch(getSignInInfo());
  dispatch(preload());
};
