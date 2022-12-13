import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AxiosAuth } from "./charts/GetChart";

//checks if jwt token is ok and moves to the user to the wanted site. If the token is not correct takes the user to a page that has a link to the login page
const Auth = ({ children }) => {
  const [tokenIsValid, setTokenIsValid] = useState(false);
  useEffect(() => {
    AxiosAuth("/user/auth", (res) => {
      if (res.status === 200) {
        setTokenIsValid(true);
      } else {
        setTokenIsValid(false);
      }
    });
  }, []);

  if (!tokenIsValid) {
    return (
      <div>
        <h2>You need to login to view this page</h2>
        <p>
          <Link to="/Login">login</Link>
        </p>
      </div>
    );
  } else if (tokenIsValid) {
    return children;
  }
};

export default Auth;
