import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/App.css";
import UserHome from "./UserHome.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/user" element={<UserHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
