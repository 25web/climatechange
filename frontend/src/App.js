import Login from "./components/Login";
import Register from "./components/Register";
import { GetChart } from "./components/charts/GetChart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chart/:chartId" element={<GetChart />} />
      </Routes>
    </div>
  );
}

export default App;
