import React, { useState } from "react";
import "../css/FNH.scss";

// creates a custom view for the user
export default function CustomView() {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    if (event.target.checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((v) => v !== value));
    }
  };

  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" value="1" onChange={handleChange} />
        V1
      </label>
      <label>
        <input type="checkbox" value="3" onChange={handleChange} />
        V3
      </label>
      <label>
        <input type="checkbox" value="4" onChange={handleChange} />
        V4
      </label>
      <label>
        <input type="checkbox" value="5" onChange={handleChange} />
        V5
      </label>
      <label>
        <input type="checkbox" value="6" onChange={handleChange} />
        V6
      </label>
      <label>
        <input type="checkbox" value="7" onChange={handleChange} />
        V7
      </label>
      <label>
        <input type="checkbox" value="8" onChange={handleChange} />
        V8
      </label>
      <label>
        <input type="checkbox" value="9" onChange={handleChange} />
        V9
      </label>
      <div>
        Checked values:
        <ul>
          {checkedValues.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
