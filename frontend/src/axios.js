import axios from "axios";

//axios setup for backend
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

export default axios;
