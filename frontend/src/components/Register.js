import "../css/LR.scss";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  let url = `http://localhost:3001/user/register`;
  let body = JSON.stringify({
    fname: fname,
    lname: lname,
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

  const register = () => {
    axios(authOptions)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/login");
          setMessage("Success");
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        setMessage(err.response.data.message);
      });
  };
  useEffect(() => {
    register();
  }, []);

  return (
    <div className="register-App">
      <div className="divp">
        <h2 className="inactive underlineHover">
          <Link className="alink" to="/login">
            {" "}
            Login{" "}
          </Link>
        </h2>
        <h2 className="active"> Register </h2>
      </div>
      <div className="input-container-two">
        <input
          onChange={(e) => {
            setFname(e.target.value);
          }}
          className="inputw"
          type="text"
          placeholder="First Name"
        />
        <input
          onChange={(e) => {
            setLname(e.target.value);
          }}
          className="inputw2"
          type="text"
          placeholder="Last Name"
        />
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
        <button
          onClick={register}
          data-testid="register"
          id="register"
          className="btnn"
        >
          Register
        </button>
      </div>
    </div>
  );
}
