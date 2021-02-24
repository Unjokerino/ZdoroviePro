import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import storageMiddleware from "../utils/storageMiddleware";
import saveToStorage from "../config/saveToStorage";

const middleware = [thunk, storageMiddleware(saveToStorage)];

if (__DEV__) {
  const { logger } = require("redux-logger");
  middleware.push(logger);
}

export default createStore(reducers, undefined, applyMiddleware(...middleware));
