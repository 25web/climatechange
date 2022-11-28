import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
/*import NotFound from "./components/NotFound";*/
import Home from "./components/Home";
import { GetChart } from "./components/charts/GetChart";
import { Routes, Route } from "react-router-dom";
import { V1Chart } from "./components/charts/V1";
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
        <Route path="/delete" element={<Delete />} />
        <Route path= "/home" element={<Home/>} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
    </>
  );
}

export default App;
