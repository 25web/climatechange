import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/custom.scss";
import Dropdown from "react-bootstrap/Dropdown";

function navbar() {
  return (
    <Navbar fixed="top" className="color-nav" variant="dark">
      <Nav>
        <Nav.Link as={Link} to="/home">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
          Login
        </Nav.Link>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-custom">
            Views
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/chart/v6">test</Dropdown.Item>
            <Dropdown.Item href="/chart">test2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">test3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}

export default navbar;
