import { GetChart } from "./GetChart";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import "../../css/chart.scss";
import "chartjs-adapter-luxon";

export function V5Chart() {
  const [v5, setV5] = useState([]);

  useEffect(() => {
    GetChart("/chart/V5", (res) => {
      setV5(res.data);
    });
  }, []);

  const data = {
    datasets: [
      {
        label: "CO2",
        data: v5,
        borderColor: "rgb(50, 80, 200)",
        backgroundColor: "rgb(50, 80, 200)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "co2",
        },
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {},
    scales: {
      x: {
        type: "linear",
        min: 2342,
        max: 417160,
      },
    },
  };

  return (
    <>
      <div>
        <Line data={data} options={options} />
      </div>
    </>
  );
}

export default V5Chart;
