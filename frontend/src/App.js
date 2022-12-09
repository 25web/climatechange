import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { V1Chart } from "./components/charts/V1";
import { V6Chart } from "./components/charts/V6";
import Delete from "./components/Delete";

function App() {
  return (
    <>
    <Navbar/>
    <div className="container" >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chart" element={<V1Chart />} />
        <Route path="/chart/v6" element={<V6Chart />} />
        <Route path="/delete" element={<Delete />} />
        <Route path= "/home" element={<Home/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
