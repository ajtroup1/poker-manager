import React from "react";
import "../css/Signup.css";

function Signup() {
  return (
    <div id="signup-main" className="bg-gray-700">
      <div id="title">
        <h1>Sign up</h1>
      </div>
      <div id="form-container">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="col-md-6">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              First Name
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="col-md-6">
            <label htmlFor="username" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="col-12">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              autoComplete="off"
            />
          </div>
          <div className="col-12">
            <label htmlFor="conf-password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="conf-password"
              autoComplete="off"
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary" id="signup-btn">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
