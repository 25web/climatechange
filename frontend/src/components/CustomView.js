import React, { useState } from "react";
import "../css/FNH.scss";
import axios from "../axios";

export default function CustomView() {
  const [checkedValues, setCheckedValues] = useState([]);

  const [charts, setCharts] = useState([]);

  const handleCheckboxChange = (event) => {
    const chart = event.target.value;
    if (event.target.checked) {
      setCharts([...charts, chart]);
    } else {
      setCharts(charts.filter((c) => c !== chart));
    }
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/view/create", { title: "test", charts })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="checkbox">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="checkbox" value="v1" onChange={handleCheckboxChange} />
          V1
        </label>
        <label>
          <input type="checkbox" value="v2" onChange={handleCheckboxChange} />
          V2
        </label>
        <label>
          <input type="checkbox" value="v3" onChange={handleCheckboxChange} />
          V3
        </label>
        <label>
          <input type="checkbox" value="v4" onChange={handleCheckboxChange} />
          V4
        </label>
        <label>
          <input type="checkbox" value="v5" onChange={handleCheckboxChange} />
          V5
        </label>
        <label>
          <input type="checkbox" value="v6" onChange={handleCheckboxChange} />
          V6
        </label>
        <label>
          <input type="checkbox" value="v7" onChange={handleCheckboxChange} />
          V7
        </label>
        <label>
          <input type="checkbox" value="v8" onChange={handleCheckboxChange} />
          V8
        </label>
        <label>
          <input type="checkbox" value="v9" onChange={handleCheckboxChange} />
          V9
        </label>
        <br></br>
        <button class="btn btn-success" type="submit">
          Create new custom view
        </button>
      </form>
    </div>
  );
}
