import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/custom.scss";

export default function navbar() {
  return (
    <Navbar fixed="top" className="color-nav" variant="dark">
      <Nav className="mr-auto">

        <Nav.Link as={Link} to="/home">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
          Login
        </Nav.Link>
        <Nav.Link as={Link} to="/register">
          Register
        </Nav.Link>
      </Nav>
      <br />
    </Navbar>
  );
}
