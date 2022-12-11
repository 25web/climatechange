import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { V1Chart } from "./components/charts/V1";
import { V5Chart } from "./components/charts/V5";
import { V3Chart } from "./components/charts/V3";
import { V4Chart } from "./components/charts/V4";
import { V6Chart } from "./components/charts/V6";
import { V7Chart } from "./components/charts/V7";
import { V8Chart } from "./components/charts/V8";
import NotFound from "./components/NotFound";
import N2 from "./components/N2";
import N1 from "./components/N1";
import Auth from "./components/Auth";
import Delete from "./components/Delete";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    //timer to logout user after 10 seconds(for testing) of inactivity
    let timer;
    const reset = () => {
      if (localStorage.getItem("token")) {
        clearInterval(timer);
        timer = setInterval(() => {
          localStorage.clear();
          window.location.href = "/login";
        }, 10000);
      }
    };
    document.onkeydown = reset;
    document.onmousemove = reset;
  }, []);

  return (
    <>
      <div>
        <Logout />
      </div>
      <div className="header">
        <Navbar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chart/v1" element={<V1Chart />} />
          <Route path="/chart/v3" element={<V3Chart />} />
          <Route path="/chart/v4" element={<V4Chart />} />
          <Route path="/chart/v5" element={<V5Chart />} />
          <Route path="/chart/v6" element={<V6Chart />} />
          <Route path="/chart/v7" element={<V7Chart />} />
          <Route path="/chart/v8" element={<V8Chart />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/delete"
            element={
              <Auth>
                <Delete />
              </Auth>
            }
          />
          <Route
            path="/N1"
            element={
              <Auth>
                <N1 />
              </Auth>
            }
          />
        </Routes>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
