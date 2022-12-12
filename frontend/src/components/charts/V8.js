import { GetChart } from "./GetChart";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import "../../css/chart.scss";
import "chartjs-adapter-luxon";

export function V8Chart() {
  const [co2, setCo2] = useState([]);
  const [years, setYears] = useState([]);
  const [country, setCountry] = useState([]);
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    GetChart("/chart/v8", (res) => {
      const data = res.data.resV8;
      setCo2(data);
      setCountry(Object.keys(data));
      setYears(res.data.resV8year.map((item) => item.year));
    });
  }, []);

  const data = {
    labels: years,
    datasets: country.map((country) => {
      const color = Math.floor(Math.random() * 255);
      const color1 = Math.floor(Math.random() * 255);
      const color2 = Math.floor(Math.random() * 255);
      const fullColor = (
        "rgb(" +
        color +
        "," +
        color1 +
        "," +
        color2 +
        ")"
      ).toString();

      return {
        label: country,
        data: co2[country],
        borderColor: fullColor,
        backgroundColor: fullColor,
        pointRadius: 0,
      };
    }),
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "CO2 emissions by country",
        color: "rgb(0, 0, 7)",
        font: {
          size: 17,
        },
      },
      legend: {
        display: boolean ? false : true,
        labels: {
          font: {
            size: 8.5,
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
          font: {
            size: 12,
          },
        },
      },
      y: {
        stacked: true,
        type: "linear",
        title: {
          display: true,
          text: "Fossil CO2 emissions by country",
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
          <button className="sbtn" onClick={() => setBoolean(!boolean)}>
            {boolean ? "Show labels" : "Hide labels"}
          </button>
        </div>
        <div className="chart-wrapper">
          <div>
            <h4>Description</h4>
            <p>Fossil CO2 emissions by country in 2021.</p>
          </div>
          <div>
            <h4>Source</h4>
            <div className="inner">
              <a
                className="alink"
                href="https://essd.copernicus.org/articles/14/1917/2022/"
              >
                Description
              </a>
            </div>
            <div className="inner">
              <a
                className="alink"
                href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D"
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

export default V8Chart;
