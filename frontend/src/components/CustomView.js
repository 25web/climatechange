import React, { useState } from "react";
import "../css/FNH.scss";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

// creates a custom view for the user
export default function CustomView() {
  const [charts, setCharts] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const sortAscending = (arr) => {
    return arr.sort(function (a, b) {
      return a.localeCompare(b);
    });
  };

  const handleCheckboxChange = (event) => {
    const chart = event.target.value;
    if (event.target.checked) {
      setCharts([...charts, chart]);
    } else {
      setCharts(charts.filter((c) => c !== chart));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const sortedCharts = sortAscending(charts);
    if (/^[a-z0-9 ]+$/i.test(title) === false) {
      alert("Title can only contain letters, numbers and spaces");
      return;
    }
    if (sortedCharts.length === 0) {
      alert("Please select at least one chart");
      return;
    }
    axios
      .post(
        "http://localhost:3001/view/create",
        {
          title,
          charts: sortedCharts,
        },
        { headers: { "Cache-Control": "no-cache" } }
      )
      .then((response) => {
        if (response.status === 200) {
          navigate("/view/" + response.data.url);
        }
      });
  };

  return (
    <div className="container">
      <div className="checkbox">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            class="form-control"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
          <label>
            <input type="checkbox" value="v1" onChange={handleCheckboxChange} />
            V1
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
    </div>
  );
}
