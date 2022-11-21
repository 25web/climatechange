import { GetChart } from "./GetChart";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import "../../css/chart.scss";
import "chartjs-adapter-luxon";

export function V3Chart() {
  const [monthly, setMonthly] = useState([]);
  const [annual, setAnnual] = useState([]);
  const [boolean, setBoolean] = useState(false);

  console.log("/chart/v3");
  useEffect(() => {
    GetChart("/chart/v3", (res) => {
      setMonthly(res.data.resMonthly);
      setAnnual(res.data.resAnnual);
    });
  }, []);

  let data = {
    datasets: [
      {
        label: "mean",
        data: boolean ? monthly : annual,
        borderColor: "rgb(4, 255, 46)",
        backgroundColor: "rgb(4, 255, 46)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "mean",
        },
        pointRadius: 0,
      },
    ],
  };
  let optionsYear = {
    responsive: true,
    scales: {
      x: {
        type: "time",
        time: {
          unit: boolean ? "year" : "month",
        },
      },
    },
  };

  return (
    <>
      <div className="chart-wrapper">
        <Line options={optionsYear} data={data} />
        <button onClick={() => setBoolean(!boolean)}>
          {boolean ? "annual" : "monthly"}
        </button>
      </div>
    </>
  );
}

export default V3Chart;
