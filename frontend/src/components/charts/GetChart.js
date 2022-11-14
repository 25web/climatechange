import react from "react";
import axios from "../../axios";
import { useParams } from "react-router-dom";

export async function GetChart(endpoint, callback) {
  const chartId = useParams();
  const response= await axios.get("/chart/" + endpoint);
  const data = response.data;
  return data;

}
