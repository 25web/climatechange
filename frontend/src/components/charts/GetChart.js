import react from "react";
import axios from "../../axios";
// import { useParams } from "react-router-dom";

// export async function GetChart(endpoint, callback) {
//   // const chartId = useParams();
//   // const response= await axios.get("/chart/" + endpoint);
//   // const data = response.data;
//   // return data;
//   const YearsWeather = [
//     { year: "2019-02", temp: 10 },
//     { year: "2020-03", temp: 20 },
//     { year: "2021-03", temp: 30 },
//     { year: "2022-05", temp: 40 },
//     { year: "2023-05", temp: 50 },
//   ];
//   return YearsWeather;
// }

// export async function GetChart() {
//   // const chartId = useParams();
//   // const response= await axios.get("/chart/" + endpoint);
//   // const data = response.data;
//   // return data;
//   const YearsWeather = [
//     { year: "2019-02", temp: 10 },
//     { year: "2020-03", temp: 20 },
//     { year: "2021-03", temp: 30 },
//     { year: "2022-05", temp: 40 },
//     { year: "2023-05", temp: 50 },
//   ];
//   return YearsWeather;
// }
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
