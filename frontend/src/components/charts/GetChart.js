import react from "react";
import axios from "../../axios";
import { useParams } from "react-router-dom";

export function GetChart(callback) {
  const chartId = useParams();
  axios.get("/chart/" + chartId.chartId).then((response) => {
    return response.data;
  });
}
