import { GetChart } from "./GetChart";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Chart() {
  const YearsWeather = [
    { year: '2019-02', temp: 10 },
    { year: '2020-03', temp: 20 },
    { year: '2021-03', temp: 30 },
    { year: '2022-05', temp: 40 },
    { year: '2023-05', temp: 50 },
  ];

//   let test = [];
//   test = await GetChart("v1");
//   console.log(test);
console.log(GetChart("v1"));
  const [chartData, setChartData] = useState({
    labels: YearsWeather.map((d) => d.year),
    datasets: [
      {
        label: "global anomaly",
        data: YearsWeather.map((d) => d.temp),
        backgroundColor: ["rgba(75, 192, 192, 0.6)"],
      },
        // {
        //   label: "northern anomaly",
        //   data: test.map((d) => d.northern_anomaly),
        //   backgroundColor: ["rgba(75, 192, 192, 0.6)"],
        // },
        // {
        //   label: "southern anomaly",
        //   data: test.map((d) => d.southern_anomaly),
        // }
    ],
  });
  return (
    <div>
      <Line data={chartData} />
      <p>test</p>
    </div>
  );
}

export default Chart;
