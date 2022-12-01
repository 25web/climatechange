import { GetChart } from "./GetChart";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import "../../css/chart.scss";
import "chartjs-adapter-luxon";

export function V7Chart() {
  const [v6, setV6] = useState([]);
  const [v7, setV7] = useState([]);

  useEffect(() => {
    GetChart("/chart/v7", (res) => {
      setV6(res.data.resV6);
      setV7(res.data.resV7);
    });
  }, []);

  let data = {
    datasets: [
      {
        label:
          "Evolution of global temperature over the past two million years",
        data: v7,
        borderColor: "rgb(4, 226, 255)",
        backgroundColor: "rgb(4, 226, 255)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "change",
        },
        yAxisID: "y",
        pointRadius: 0,
      },
      {
        label: "Ice core 800k year composite study CO2 measurements",
        data: v6,
        borderColor: "rgb(4, 255, 46)",
        backgroundColor: "rgb(4, 255, 46)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "co2",
        },
        yAxisID: "y1",
        pointRadius: 0,
      },
    ],
  };
  let optionsYear = {
    scales: {
      x: {
        ticks: {
          stepSize: 50000,
        },
        type: "linear",
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
      y1: {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "Change",
        },
      },
    },
  };
  return (
    <>
      <div className="chart-wrapper">
        <Line options={optionsYear} data={data} />
      </div>
      <div>
        <h4>Description</h4>
        <p>Evolution of global temperature over the past two million years</p>
      </div>
      <div>
        <h4>Source</h4>
        <div className="inner">
          <a href="http://carolynsnyder.com/publications.php">Dataset</a>
        </div>
        <div className="inner">
          <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">
            Description
          </a>
        </div>
      </div>
    </>
  );
}

export default V7Chart;
