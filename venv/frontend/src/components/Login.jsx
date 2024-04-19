import React from "react";
import "../css/Login.css";

function Login() {
  return (
    <div id="login-main" className="bg-gray-700">
      <div id="title">
        <h1>Log in</h1>
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
        <a href="/signup">
          <h5 className="signup-title italic underline underline-offset-4">
            Don't have an account? Sign up!
          </h5>
        </a>
      </div>
    </div>
  );
}

export default Login;
