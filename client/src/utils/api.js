import axios from "axios";
import config from "../config.json";

axios.defaults.baseURL = config.apiUrl;

axios.defaults.headers.get["Accept"] = "application/json";

axios.defaults.headers.post["Accept"] = "application/json";

export default {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
};
