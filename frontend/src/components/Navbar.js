import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/FNH.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbarr() {
  const [tokenIsValid, setTokenIsValid] = useState(false);
  const navigate = useNavigate();
  // const [boolean, setBoolean] = useState(false);

  function logout() {
    localStorage.removeItem("token");
  //   if (tokenIsValid === false) {
  //     setBoolean(false);
  //   } else {
  //     setBoolean(true);
  //   }
  }

  const checkStorage = (key) => {
    const storedData = localStorage.getItem(key);
    if (!storedData) setTokenIsValid(false);
    else setTokenIsValid(true);
  };
  useEffect(() => {
    checkStorage("token");
  }, []);

  return (
    <Navbar fixed="top" className="color-nav" variant="dark">
      <Nav>
        <Nav.Link as={Link} to="/profile">
          Profile
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        <Nav.Link as={Link} onClick={logout} to="/login">
          {/* {!boolean ? "login" : "logout"} */}
          Logout
        </Nav.Link>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-custom">
            Views
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/n1">N1</Dropdown.Item>
            <Dropdown.Item href="/n2">N2</Dropdown.Item>
            <Dropdown.Item href="/createview">Create a view</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}

export default Navbarr;
