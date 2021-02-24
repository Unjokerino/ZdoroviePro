import axios from "axios";
import store from "../store";
import { signOut } from "../store/actions";

export const healthProInstance = axios.create();
export const ssoInstance = axios.create();

healthProInstance.interceptors.request.use(async (config) => {
  const {
    authReducer: {
      identity: { token },
    },
  } = store.getState();
  config.headers = {
    Authorization: token ? token : "",
  };
  return config;
});

healthProInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response, config } = error;
    const originalRequest = { ...config };

    const isUnauthorized = response.status === 403 || response.status === 401;
    if (response && isUnauthorized && !originalRequest._retry) {
      originalRequest._retry = true;
    }
    store.dispatch(signOut());
  }
);
