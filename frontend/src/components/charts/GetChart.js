import react from "react";
import axios from "../../axios";

export async function GetChart(path, callback) {
  axios
    .get("http://localhost:3001" + path)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      callback(err);
    });
}
