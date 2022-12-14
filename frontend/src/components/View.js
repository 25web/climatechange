import V1 from "./charts/V1";
import V3 from "./charts/V3";
import V4 from "./charts/V4";
import V5 from "./charts/V5";
import V6 from "./charts/V6";
import V7 from "./charts/V7";
import V8 from "./charts/V8";
import V9 from "./charts/V9";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";

export default function Showview() {
  const { url } = useParams();

  const [title, setTitle] = useState("");
  const [v1, setV1] = useState(false);
  const [v3, setV3] = useState(false);
  const [v4, setV4] = useState(false);
  const [v5, setV5] = useState(false);
  const [v6, setV6] = useState(false);
  const [v7, setV7] = useState(false);
  const [v8, setV8] = useState(false);
  const [v9, setV9] = useState(false);

  axios.get("http://localhost:3001/view/" + url).then((response) => {
    setTitle(response.data[0].title);
    setV1(response.data[0].charts.includes("v1"));
    setV3(response.data[0].charts.includes("v3"));
    setV4(response.data[0].charts.includes("v4"));
    setV5(response.data[0].charts.includes("v5"));
    setV6(response.data[0].charts.includes("v6"));
    setV7(response.data[0].charts.includes("v7"));
    setV8(response.data[0].charts.includes("v8"));
    setV9(response.data[0].charts.includes("v9"));
  });

  return (
    <>
      <div className="center">
        <h2 className="h1">{title}</h2>
        <div className="mbottom">
          {v1 && (
            <div className="block">
              <V1 />
            </div>
          )}
          {v3 && (
            <div className="block">
              <V3 />
            </div>
          )}
          {v4 && (
            <div className="block">
              <V4 />
            </div>
          )}
          {v5 && (
            <div className="block">
              <V5 />
            </div>
          )}
          {v6 && (
            <div className="block">
              <V6 />
            </div>
          )}
          {v7 && (
            <div className="block">
              <V7 />
            </div>
          )}
          {v8 && (
            <div className="block">
              <V8 />
            </div>
          )}
          {v9 && (
            <div className="block">
              <V9 />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
