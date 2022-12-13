import { GetChart } from "./GetChart";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import "../../css/chart.scss";
import "chartjs-adapter-luxon";

//create a chart and call backend for chartdata
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
    plugins: {
      title: {
        display: true,
        text: "Vostok Ice Core CO2 measurements, 417160 - 2342 years",
        color: "rgb(0, 0, 7)",
        font: {
          size: 17,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Mean age of  the air (years)",
        },
        type: "linear",
        min: 2342,
        max: 417160,
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "CO2 concentration (ppm)",
          font: {
            size: 10,
          },
        },
      },
    },
  };

  return (
    <>
      <div className="space">
        <div className="chart-wrapper">
          <Line options={options} data={data} />
        </div>
        <div className="chart-wrapper">
          <div>
            <h4>Description</h4>
            <p>
              Line graph of atmospheric carbon dioxide concentrations based on
              ice drilling conducted at Vostok station in the Soviet Antarctic.
              Time period ~400000 years.
            </p>
          </div>
          <div>
            <h4>Source</h4>
            <div className="inner">
              <a
                className="alink"
                href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html"
              >
                Description
              </a>
            </div>
            <div className="inner">
              <a
                className="alink"
                href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2"
              >
                Dataset
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default V5Chart;
