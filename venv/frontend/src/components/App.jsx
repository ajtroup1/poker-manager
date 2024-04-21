import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/App.css";
import UserHome from "./UserHome.jsx";
import Home from "./Home.jsx";
import UserLogin from "./UserLogin.jsx"
import Signup from "./Signup.jsx";
import AdminLogin from "./AdminLogin.jsx"
import AdminHome from "./AdminHome.jsx"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/user" element={<UserHome />} />
          <Route path="/" element={<Home />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminhome" element={<AdminHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
