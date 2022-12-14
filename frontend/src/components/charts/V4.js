import { GetChart } from "./GetChart";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import "../../css/chart.scss";
import "chartjs-adapter-luxon";

//create a chart and call backend for chartdata
export function V4Chart() {
  const [v4_1, setV41] = useState([]);
  const [v4_2, setV42] = useState([]);
  const [v4_3, setV43] = useState([]);
  const [v3, setV3] = useState([]);
  const [v10, setV10] = useState([]);
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    GetChart("/chart/v4", (res) => {
      setV41(res.data.resV41);
      setV42(res.data.resV42);
      setV43(res.data.resV43);
      setV3(res.data.resV3);
      setV10(res.data.resv10_v4);
    });
  }, []);

  let data = {
    datasets: [
      {
        label: "DE08",
        data: v4_1,
        borderColor: "rgb(255, 255, 46)",
        backgroundColor: "rgb(255, 255, 46)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "co2",
        },
        pointRadius: 0,
      },

      {
        label: "DE08-2",
        data: v4_2,
        borderColor: "rgb(4, 226, 255)",
        backgroundColor: "rgb(4, 226, 255)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "co2",
        },
        pointRadius: 0,
      },

      {
        label: "DSS",
        data: v4_3,
        borderColor: "rgb(255, 4, 234)",
        backgroundColor: "rgb(255, 4, 234)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "co2",
        },
        pointRadius: 0,
      },
      {
        label: "Human Evolution and Activities",
        data: v10,
        borderColor: "rgb(255, 4, 234)",
        backgroundColor: "rgb(0, 0, 0)",
        hidden: false,
        showLine: false,
        parsing: {
          xAxisKey: "year",
          yAxisKey: "val",
        },
        pointRadius: 10,
      },
      {
        label: boolean ? "co2 mean" : "",
        data: boolean ? v3 : [],
        borderColor: boolean ? "rgb(255,100, 0)" : "rgb(255, 4, 234, 0)",
        backgroundColor: boolean ? "rgb(255, 100, 0)" : "rgb(255, 4, 234, 0)",
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
        text: "Antarctic Ice Core records of atmospheric CO2 ratios combined with Mauna Loa measurements",
        color: "rgb(0, 0, 7)",
        font: {
          size: 17,
        },
      },
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
        type: "linear",
        max: 2020,
      },
    },
  };

  return (
    <>
      <div className="space">
        <div className="chart-wrapper">
          <Line options={options} data={data} />
          <button className="sbtn" onClick={() => setBoolean(!boolean)}>
            {boolean ? "Show less" : "Show Mauna Loa Co2 data"}
          </button>
        </div>
        <div className="chart-wrapper">
          <div>
            <h4>Description</h4>
            <p>
              Antarctic Ice Core records of atmospheric CO2 ratios presented
              here are derived from three ice cores obtained at Law Dome, East
              Antarctica from 1987 to 1993 combined with Mauna Loa measurements.
            </p>
          </div>
          <div>
            <h4>Source</h4>
            <div>
              <a>
                Antarctic Ice Core records of atmospheric CO2 ratios combined
                with Mauna Loa measurement:
              </a>
              &nbsp;&nbsp;
              <a
                className="alink"
                href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html"
              >
                Description
              </a>
              &nbsp;&nbsp;
              <a
                className="alink"
                href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat"
              >
                Dataset
              </a>
            </div>
            <div>
              <a>
                Atmospheric CO2 concentrations from Mauna Loa measurements
                starting 1958:
              </a>
              &nbsp;&nbsp;
              <a className="alink" href="https://gml.noaa.gov/ccgg/trends/">
                Description
              </a>
              &nbsp;&nbsp;
              <a
                className="alink"
                href="https://gml.noaa.gov/ccgg/trends/data.html"
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

export default V4Chart;
