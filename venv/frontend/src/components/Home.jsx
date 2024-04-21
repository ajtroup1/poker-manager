import React, { useState } from "react";
import "../css/Home.css";
import UserLogin from "./UserLogin";

function Home({}) {
  return (
    <>
      <div className="home-main">
        <div className="title">
          <h1>Poker Website</h1>
          <img src="../src/assets/poker-logo.png" id="poker-logo" />
        </div>
        <div className="login-choices">
          <a href="/userlogin">
            <button className="btn btn-success">User Login</button>
          </a>
          <a href="/adminlogin">
            <button className="btn btn-danger">Admin Login</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
