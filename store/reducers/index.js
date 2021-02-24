import { combineReducers } from "redux";
import testsReducer from "./tests";
import authReducer from "./auth";
import loadersReducer from "./loaders";
import systemReducer from "./system";

export default combineReducers({
  testsReducer,
  authReducer,
  loadersReducer,
  systemReducer,
});
