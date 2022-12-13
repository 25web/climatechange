import React from "react";
import { useNavigate } from "react-router-dom";

//if token is correct it logs out the user and removes the token
export default function Logout() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
