import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

export default axios;
