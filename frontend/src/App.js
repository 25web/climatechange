import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import N2 from "./components/N2";
import N1 from "./components/N1";
import N2 from "./components/N2";
import CustomView from "./components/CustomView";
import Auth from "./components/Auth";
import { V9Chart } from "./components/charts/V9";
import Delete from "./components/Delete";
import React, { useEffect } from "react";
import Profile from "./components/Profile";

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
      <div className="all">
        <div className="header">
          <Navbar />
        </div>
        <div className="main">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/profile"
              element={
                <Auth>
                  <Profile />
                </Auth>
              }
            />
            <Route
              path="/createview"
              element={
                <Auth>
                  <CustomView />
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
            <Route
              path="/N2"
              element={
                <Auth>
                  <N2 />
                </Auth>
              }
            />
          </Routes>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
