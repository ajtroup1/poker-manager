import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigate from react-router-dom
import "../css/AdminNavbar.css";

function AdminNavbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/"); // Navigate to the root path ("/") upon logout
  };

  return (
    <div className="navbar" style={{ backgroundColor: "#272f4e" }}>
      <img src="../src/assets/poker-logo.png" style={{ width: "100px"}}/>
      <div style={{ width: "30%" }}>{/*  */}</div>
      <div className="admin-nav-item">
        <p id="nav-link">Change Admin Credentials</p>
      </div>
      <div className="admin-nav-item">
        <p id="nav-link">View Statistics</p>
      </div>
      <div className="admin-nav-item">
        <p id="nav-link">View Nights</p>
      </div>
      <div className="admin-nav-item">
        <p id="nav-link">View Users</p>
      </div>
      <button
        className="btn btn-outline-danger"
        style={{ marginTop: "12px", marginRight: "10px", lineHeight: "10px" }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default AdminNavbar;
