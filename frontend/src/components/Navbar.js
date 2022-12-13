import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/FNH.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosAuth } from "./charts/GetChart";

function Navbarr() {
  const [tokenIsValid, setTokenIsValid] = useState(false);

  function logout() {
    localStorage.removeItem("token");
    if (tokenIsValid === true) {
      window.location.href = "/login";
    }
  }

  useEffect(() => {
    AxiosAuth("/user/auth", (res) => {
      if (res.status === 200) {
        setTokenIsValid(true);
      } else {
        setTokenIsValid(false);
      }
    });
  }, []);

  return (
    <Navbar fixed="top" className="color-nav" variant="dark">
      <Nav>
        <Nav.Link as={Link} to="/profile">
          Profile
        </Nav.Link>
        <Nav.Link as={Link} onClick={logout} to="/login">
          {!tokenIsValid ? "login" : "logout"}
        </Nav.Link>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-custom">
            Views
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/n1">
              N1
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/n2">
              N2
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/createview">
              Create a view
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}

export default Navbarr;
