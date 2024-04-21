import React, { useState } from "react";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";
import UserHome from "./UserHome";
import Cookies from "js-cookie";



function Userlogin({}) {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Handler function to update loginInfo state when inputs change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler function to submit login form
  // Handler function to submit login form
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/users")
      .then((response) => response.json())
      .then((data) => {
        let found = false;
        data.map((user) => {
          if (user.username === loginInfo.username) {
            found = true;
            Cookies.set("userId", user.id);
            if (user.password === loginInfo.password) {
              // Navigate to the user's page and pass the user's ID as state
              navigate("/user", { state: { userId: user.id } });
              setLoggedIn(true); // Optionally set a state to track login status
            } else {
              alert("Incorrect password");
              setLoginInfo({
                username: loginInfo.username,
                password: ""
              })
            }
          }
        });
        if (!found) {
          alert("Incorrect username");
          setLoginInfo({
            username: "",
            password: "",
          });
        }
      })
      .catch((error) => console.error("Error fetching user data:", error));
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="home-main">
        <div className="title">
          <h1>User Login</h1>
          <img src="../src/assets/poker-logo.png" id="poker-logo" />
        </div>
        <div className="login-choices">
          <form
            style={{ width: "80%", fontSize: "15px", textAlign: "center" }}
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={loginInfo.username}
                onChange={handleInputChange}
                aria-describedby="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={loginInfo.password}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  height: "30px",
                  display: "flex",
                  marginRight: "10px",
                  alignItems: "center",
                  width: "40%",
                  justifyContent: "center",
                }}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  width: "40%",
                  justifyContent: "center",
                }}
                onClick={handleSignup}
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Userlogin;
