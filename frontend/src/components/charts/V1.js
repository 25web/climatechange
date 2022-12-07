import { GetChart } from "./GetChart";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import "../../css/chart.scss";
import "chartjs-adapter-luxon";

export function V1Chart() {
  const [monthly, setMonthly] = useState([]);
  const [annual, setAnnual] = useState([]);
  const [v2, setV2] = useState([]);
  const [boolean, setBoolean] = useState(false);
  const [boolean2, setBoolean2] = useState(false);

  useEffect(() => {
    GetChart("/chart/v1", (res) => {
      setMonthly(res.data.resMonthly);
      setAnnual(res.data.resAnnual);
      setV2(res.data.resV2);
    });
  }, []);

  let data = {
    datasets: [
      {
        label: "global",
        data: boolean ? monthly : annual,
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
        data: boolean ? monthly : annual,
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
        data: boolean ? monthly : annual,
        borderColor: "rgb(255, 4, 234)",
        backgroundColor: "rgb(255, 4, 234)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "northern_anomaly",
        },
        pointRadius: 0,
      },
      {
        label: boolean2 ? "v2" : "",
        data: boolean2 ? v2 : [],
        borderColor: boolean2 ? "rgb(18, 47, 235)" : "rgba(18, 47, 235, 0)",
        backgroundColor: boolean2 ? "rgb(18, 47, 235)" : "rgba(18, 47, 235, 0)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "t",
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

      y: {
        type: "linear",
        title: {
          display: true,
          text: "Temperature (°C)",
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
        <button onClick={() => setBoolean2(!boolean2)}>
          {boolean2 ? "Hide v2" : "Add v2"}
        </button>
      </div>
      <div className="chart-wrapper">
        <div>
          <h4>Description</h4>
          <p>Global historical surface temperature anomalie???????</p>
        </div>
        <div>
          <h4>Source</h4>
          <div>
            <a>v1:</a>
            &nbsp;&nbsp;
            <a
              className="alink"
              href="https://www.metoffice.gov.uk/hadobs/hadcrut5/"
            >
              Description
            </a>
            &nbsp;&nbsp;
            <a
              className="alink"
              href="https://www.metoffice.gov.uk/hadobs/hadcrut5/data/current/download.html"
            >
              Dataset
            </a>
          </div>
          <div>
            <a>v2:</a>
            &nbsp;&nbsp;
            <a
              className="alink"
              href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005"
            >
              Description
            </a>
            &nbsp;&nbsp;
            <a
              className="alink"
              href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt"
            >
              Dataset
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default V1Chart;
