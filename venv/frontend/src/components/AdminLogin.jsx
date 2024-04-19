import React from "react";
import "../css/Login.css";

function Login() {
  return (
    <div id="login-main" className="bg-gray-700">
      <div id="title">
        <h1>Admin log in</h1>
      </div>
      <div id="form-container">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
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
            placeholder="Password"
          />
        </div>
        <button id="login-btn" className="btn btn-primary">
          Log in
        </button>
      </div>
    </div>
  );
}

export default Login;
