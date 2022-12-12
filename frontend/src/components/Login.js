import "../css/LR.scss";
import React, { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
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
    axios(authOptions)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          navigate("/N1"); // the right one will be added later
        }
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data);
        setMessage(err.response.data.message);
      });
  };

  return (
    <div className="login-App">
      <div className="divp">
        <h2 className="active"> Login </h2>
        <h2 className="inactive underlineHover">
          <a className="alink" href="/register">
            Register
          </a>
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
      <div className="pmessage">
        <p data-testid="err">{message}</p>
      </div>
      <div className="container">
        <button onClick={login} data-testid="login" className="btn">
          Login
        </button>
      </div>
    </div>
  );
}
