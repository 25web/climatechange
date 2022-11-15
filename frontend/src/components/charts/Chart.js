import { GetChart } from "./GetChart";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import "../../css/chart.scss";
import "chartjs-adapter-luxon";

export function Chart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    GetChart("/chart/v1", (res) => {
      setChartData(res.data);
    });
  }, []);

  let data = {
    datasets: [
      {
        label: "global",
        data: chartData,
        borderColor: "rgb(4, 255, 46)",
        backgroundColor: "rgb(4, 255, 46)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "global_anomaly",
        },
        pointRadius: 0,
      },
      {
        label: "southern",
        data: chartData,
        borderColor: "rgb(4, 226, 255)",
        backgroundColor: "rgb(4, 226, 255)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "southern_anomaly",
        },
        pointRadius: 0,
      },
      {
        label: "northern",
        data: chartData,
        borderColor: "rgb(255, 4, 234)",
        backgroundColor: "rgb(255, 4, 234)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "northern_anomaly",
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
          unit: "year",
        },
      },

      y: {
        min: -2,
        max: 2,
        ticks: {
          stepSize: 0.3,
        },
      },
    },
  };
  return (
    <>
      <div className="chart-wrapper">
        <Line options={optionsYear} data={data} />
      </div>
    </>
  );
}

export default Chart;
