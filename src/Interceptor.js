import axios from "axios";

const config = {
  baseURL: `http://127.0.0.1:8000/api/`,
};

const client = axios.create(config);
const token = localStorage.getItem("token");

const authInterceptor = (config) => {
  config.headers.Authorization = `Bearer ${token}`;
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
};

client.interceptors.request.use(authInterceptor);

export default client;
