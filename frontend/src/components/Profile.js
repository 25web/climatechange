import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

//creates a profile page with a delete button and custom views list
export default function Profile() {
  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [views, setViews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/user/info").then((res) => {
      setUsername(res.data.user.username);
      setFname(res.data.user.fname);
      setLname(res.data.user.lname);
      setViews(res.data.user.views);
    });
  });

  let url = `http://localhost:3001/user`;

  let body = JSON.stringify({
    username: username,
  });

  var deleteUserOptions = {
    method: "delete",
    url: url,
    data: body,
    headers: {
      "Content-Type": "application/json",
    },
    json: true,
  };
  const deleteUser = () => {
    axios(deleteUserOptions)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/login");
          window.location.reload(true);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <div className="container">
        <h1>
          Welcome back
          <br />
        </h1>
        <h2>
          {fname} {lname}
        </h2>
        <br></br>
        <button
          type="button"
          class="btn btn-danger"
          onClick={deleteUser}
          data="delete"
        >
          Delete account
        </button>
      </div>
    </div>
  );
}
