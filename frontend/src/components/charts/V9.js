import { GetChart } from "./GetChart";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import "../../css/chart.scss";
import "chartjs-adapter-luxon";

export function V9Chart() {
  const [v9, setV9] = useState([]);
  //   const [energy, setEnergy] = useState([]);
  //   const [land, setLand] = useState([]);
  //   const [processes, setProcesses] = useState([]);
  //   const [waste, setWaste] = useState([]);

  useEffect(() => {
    GetChart("/chart/v9", (res) => {
      setV9(res.data.resV9);
      //   setEnergy(res.data.resV9energy);
      //   setLand(res.data.resV9land);
      //   setProcesses(res.data.resV9processes);
      //   setWaste(res.data.resV9waste);
    });
  }, []);

  const data = {
    labels: v9.map((v) => v.sector),
    datasets: [
      {
        backgroundColor: v9.map((v) => v.color),
        borderColor: v9.map((v) => v.color),
        data: v9.map((v) => v.emission_share),
      },
    ],
  };

  let options = {};
  return (
    <>
      <div className="chart-wrapper">
        <Doughnut options={options} data={data} />
      </div>
    </>
  );
}

export default V9Chart;
