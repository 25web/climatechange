import { GetChart } from "./GetChart";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import "../../css/chart.scss";
import "chartjs-adapter-luxon";

export function V7Chart() {
  const [v6, setV6] = useState([]);
  const [v7, setV7] = useState([]);
  const [v10, setV10] = useState([]);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    GetChart("/chart/v7", (res) => {
      setV6(res.data.resV6);
      setV7(res.data.resV7);
      setV10(res.data.resV10);
      setElements(res.data);
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
      {
        label: "Human Evolution and Activities",
        data: v10,
        borderColor: "rgb(255, 4, 234)",
        backgroundColor: "rgb(255, 4, 234)",
        hidden: false,
        showLine: false,
        parsing: {
          xAxisKey: "year",
          yAxisKey: "val",
        },
        pointRadius: 3,
      },
    ],
  };
  let optionsYear = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (context.dataset.label === "Human Evolution and Activities") {
              label = context.raw.event;
            }
            return label;
          },
        },
      },
    },
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
          <a className="alink" href="http://carolynsnyder.com/publications.php">
            Dataset
          </a>
        </div>
        <div className="inner">
          <a
            className="alink"
            href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf"
          >
            Description
          </a>
        </div>
      </div>
    </>
  );
}

export default V7Chart;
