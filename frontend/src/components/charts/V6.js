import { GetChart } from "./GetChart";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import "../../css/chart.scss";
import "chartjs-adapter-luxon";

export function V6Chart() {
  const [v6, setV6] = useState([]);

  useEffect(() => {
    GetChart("/chart/v6", (res) => {
      setV6(res.data);
    });
  }, []);

  let data = {
    datasets: [
      {
        label: "Ice core 800k year composite study CO2 measurements ",
        data: v6,
        borderColor: "rgb(4, 226, 255)",
        backgroundColor: "rgb(4, 226, 255)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "co2",
        },
        pointRadius: 0,
      },
    ],
  };
  let optionsYear = {
    responsive: true,
    scales: {
      x: {
        reverse: true,
        time: {
          unit: "year",
        },
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "CO2 ppm",
        },
      },
    },
  };
  return (
    <>
      <div className="chart-wrapper">
        <Line options={optionsYear} data={data} />
      </div>
      <div className="chart-wrapper">
        <div>
          <h4>Description</h4>
          <p>
            The European Project for Ice Coring in Antarctica Dome ice core from
            Dome C (EDC) has allowed for the reconstruction of atmospheric CO2
            concentrations for the last 800,000 years
          </p>
        </div>
        <div>
          <h4>Source</h4>
          <div className="inner">
            <a
              className="alink"
              href="https://www.ncei.noaa.gov/access/paleo-search/study/17975"
            >
              Description
            </a>
          </div>
          <div className="inner">
            <a
              className="alink"
              href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt"
            >
              Dataset
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default V6Chart;
