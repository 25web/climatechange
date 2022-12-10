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
        label: boolean ? "Monthly CO2 measurements" : "Annual CO2 measurements",
        data: boolean ? monthly : annual,
        borderColor: boolean ? "rgb(4, 226, 255)" : "rgb(4, 255, 46)",
        backgroundColor: boolean ? "rgb(4, 255, 255)" : "rgb(4, 226, 46)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "mean",
        },
        pointRadius: 0,
      },
    ],
  };
  let options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Atmospheric CO2 concentrations from Mauna Loa measurements starting 1958",
        color: "rgb(0, 0, 7)",
        font: {
          size: 17,
        },
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: boolean ? "year" : "month",
        },
      },
      y: {
        title: {
          display: true,
          text: "°C",
        },
      },
    },
  };

  return (
    <>
      <div className="space">
        <div className="chart-wrapper">
          <Line options={options} data={data} />
          <button className="sbtn" onClick={() => setBoolean(!boolean)}>
            {boolean ? "annual" : "monthly"}
          </button>
        </div>
        <div className="chart-wrapper">
          <div>
            <h4>Description</h4>
            <p>
              Atmospheric CO2 concentrations from Mauna Loa measurements
              starting from 1958.
            </p>
          </div>
          <div>
            <h4>Source</h4>
            <div className="inner">
              <a
                className="alink"
                href="https://gml.noaa.gov/ccgg/about/co2_measurements.html"
              >
              </a>
            </div>
            <div className="inner">
              <a className="alink" href="https://gml.noaa.gov/ccgg/trends/">
                Dataset
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default V3Chart;
