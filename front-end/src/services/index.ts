import axios from "axios";

const axiosConfigDefault = { timeout: 30000, maxRedirects: 0 };

const { REACT_APP_API_NASA } = process.env;

const axiosInstanceSearch = axios.create({
  ...axiosConfigDefault,
  baseURL: REACT_APP_API_NASA,
});

const contentType = "application/json;charset=UTF-8";

axiosInstanceSearch.interceptors.request.use(async (config) => {
  config.headers["Content-Type"] = contentType;
  config.headers["Access-Control-Allow-Methods"] = "*";
  config.headers["Access-Control-Expose-Headers"] = "Authorization,Location";
  config.headers["Access-Control-Allow-Origin"] = "*";

  return config;
});

export { axiosInstanceSearch };

export * from "./searchService";
