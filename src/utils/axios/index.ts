import axios from "axios";
import { getItem } from "@/utils/localStorage";

const ACCESS_TOKEN = "ACCESS_TOKEN";

axios.defaults.baseURL = "http://localhost:8080"; //process.env.REACT_APP_ENDPOINT_URL
axios.interceptors.request.use(
  (config) => {
    if (getItem(ACCESS_TOKEN)) {
      config.headers.authorization = `Bearer ${getItem(ACCESS_TOKEN)}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;
