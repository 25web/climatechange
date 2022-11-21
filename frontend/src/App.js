import Login from "./components/Login";
import Register from "./components/Register";
import { GetChart } from "./components/charts/GetChart";
import { Routes, Route } from "react-router-dom";
import { V1Chart } from "./components/charts/V1";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chart" element={<V1Chart />} />
      </Routes>
    </div>
  );
}

export default App;
