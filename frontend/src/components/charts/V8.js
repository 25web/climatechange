import { GetChart } from "./GetChart";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import "../../css/chart.scss";
import "chartjs-adapter-luxon";

export function V8Chart() {
  const [co2, setCo2] = useState([]);
  const [years, setYears] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    GetChart("/chart/v8", (res) => {
      const data = res.data.resV8;
      setCo2(data);
      setCountry(Object.keys(data));
      setYears(res.data.resV8year.map((item) => item.year));
    });
  }, []);

  const data = {
    labels: years,
    datasets: country.map((country) => {
      const color = Math.floor(Math.random() * 255);
      const color1 = Math.floor(Math.random() * 255);
      const color2 = Math.floor(Math.random() * 255);
      const fullColor = (
        "rgb(" +
        color +
        "," +
        color1 +
        "," +
        color2 +
        ")"
      ).toString();

      return {
        label: country,
        data: co2[country],
        borderColor: fullColor,
        backgroundColor: fullColor,
        pointRadius: 0,
      };
    }),
  };

  const options = {};

  return (
    <>
      <div className="chart-wrapper">
        <Line options={options} data={data} />
      </div>
    </>
  );
}

export default V8Chart;
