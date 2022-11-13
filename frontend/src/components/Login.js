import "../css/LR.scss";
import React, { useState } from "react";
import Axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let url = `http://localhost:3001/user/login`;

  let body = JSON.stringify({
    username: username,
    password: password,
  });
  var authOptions = {
    method: "post",
    url: url,
    data: body,
    headers: {
      "Content-Type": "application/json",
    },
    json: true,
  };
  const login = () => {
    Axios(authOptions)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-App">
      <div className="divp">
        <h2 className="active"> Login </h2>
        <h2 className="inactive underlineHover">
          <a href="/register">Register</a>
        </h2>
      </div>
      <div className="input-container">
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="Username"
        />
        <i className="zmdi zmdi-account zmdi-hc-lg"></i>
      </div>

      <div className="input-container">
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
      </div>
      <div className="container">
        <button onClick={login} className="btn" data="Login"></button>
      </div>
    </div>
  );
}
