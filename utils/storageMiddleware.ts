import AsyncStorage from "@react-native-async-storage/async-storage";
import { Middleware, Action, MiddlewareAPI } from "redux";

const storeObject = async (store: MiddlewareAPI, key: string) => {
  const data = store.getState()[key];
  await AsyncStorage.setItem(key, JSON.stringify(data));
};

export default (saver: (_action: Action) => Array<string>): Middleware =>
  (store) =>
  (next) =>
  (action) => {
    const result = next(action);
    const keys = saver(action);
    keys.forEach(async (key: string) => await storeObject(store, key));
    return result;
  };
