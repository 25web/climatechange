import Login from "./components/Login";
import Register from "./components/Register";
import { GetChart } from "./components/charts/GetChart";
import { Routes, Route } from "react-router-dom";
import { Chart } from "./components/charts/Chart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </div>
  );
}

export default App;
