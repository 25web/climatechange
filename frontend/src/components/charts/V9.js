import { GetChart } from "./GetChart";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import "../../css/chart.scss";
import "chartjs-adapter-luxon";

export function V9Chart() {
  const [v9, setV9] = useState([]);
  const [final, setFinal] = useState([]);
  const [energy, setEnergy] = useState([]);
  const [land, setLand] = useState([]);
  const [processes, setProcesses] = useState([]);
  const [waste, setWaste] = useState([]);

  useEffect(() => {
    GetChart("/chart/v9", (res) => {
      setV9(res.data.resV9);
      setEnergy(res.data.resV9energy);
      setLand(res.data.resV9land);
      setProcesses(res.data.resV9processes);
      setWaste(res.data.resV9waste);
      if (final.length === 0) {
        setFinal(res.data.resV9);
      }
    });
  }, []);

  const data = {
    labels: final.map((v) => v.sector),
    datasets: [
      {
        backgroundColor: final.map((v) => v.color),
        borderColor: final.map((v) => v.color),
        data: final.map((v) => v.emission_share),
      },
    ],
  };

  //dosent work
  // const handleLegendClick = (e) => {
  //   const index = e[0]._index;
  //   const label = e[0]._chart.data.labels[index];
  //   console.log(label);
  //   if (label === "Energy") {
  //     setFinal(energy);
  //   } else if (label === "Agriculture, Forestry & Land Use (AFOLU)") {
  //     setFinal(land);
  //   } else if (label === "Industrial processes") {
  //     setFinal(processes);
  //   } else if (label === "Waste") {
  //     setFinal(waste);
  //   }
  // };
  let options = {
    plugins: {
      title: {
        display: true,
        text: "CO2 emissions by sectors",
        color: "rgb(0, 0, 7)",
        font: {
          size: 17,
        },
      },
    },
  };
  return (
    <>
      <div className="space">
        <div className="chart-wrapper">
          <Doughnut
            options={options}
            // onElementsClick={handleLegendClick}
            data={data}
          />
          <button className="sbtn" onClick={() => setFinal(v9)}>
            Back to main
          </button>
          <button className="sbtn" onClick={() => setFinal(energy)}>
            Energy
          </button>
          <button className="sbtn" onClick={() => setFinal(land)}>
            Agriculture, Forestry & Land Use (AFOLU)
          </button>
          <button className="sbtn" onClick={() => setFinal(processes)}>
            Industrial processes
          </button>
          <button className="sbtn" onClick={() => setFinal(waste)}>
            Waste
          </button>
        </div>
        <div className="chart-wrapper">
          <div>
            <h4>Description</h4>
            <p>The global breakdown for CO2 is similar to that of total greenhouse gases electricity and heat production dominates, followed by transport, and manufacturing and construction.</p>
          </div>
          <div>
            <h4>Source</h4>
            <div className="inner">
              <a
                className="alink"
                href="https://ourworldindata.org/emissions-by-sector#co2-emissions-by-secto"
              >
                Description
              </a>
            </div>
            <div className="inner">
              <a
                className="alink"
                href="https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx"
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

export default V9Chart;
