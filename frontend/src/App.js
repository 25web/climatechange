import Login from "./components/Login";
import Register from "./components/Register";
import V1 from "./components/graphs/V1";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/graph" element={<V1 />} />
      </Routes>
    </div>
  );
}

export default App;
