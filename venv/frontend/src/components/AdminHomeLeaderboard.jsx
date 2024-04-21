import React, { useState } from "react";
import "../css/AdminHomeLeaderboard.css";

function AdminHomeLeaderBoard({ users }) {
  return (
    <>
      <div className="leaderboard-container">
        <div className="side-item">
          <div className="profile-img-container">
            <img src={users[1].profile_url} id="profile-img" />
          </div>
          <p style={{ fontSize: "12.5px", color: "silver" }}>
            2nd Highest Earner
          </p>
          <p style={{ fontSize: "10px" }}>{users[1].username}</p>
          <p style={{ fontSize: "10px" }}>{users[1].total_won}</p>
        </div>
        <div className="side-item">
          <div className="profile-img-container">
            <img src={users[0].profile_url} id="profile-img"/>
          </div>
          <p style={{ fontSize: "15px", color: "gold" }}>Highest Earner</p>
          <p style={{ fontSize: "12.5px" }}>{users[0].username}</p>
          <p style={{ fontSize: "10px" }}>{users[0].total_won}</p>
        </div>
        <div className="side-item">
          <div className="profile-img-container">
            <img src={users[2].profile_url} id="profile-img" />
          </div>
          <p style={{ fontSize: "12.5px", color: "#CD7F32" }}>
            3rd Highest Earner
          </p>
          <p style={{ fontSize: "10px" }}>{users[2].username}</p>
          <p style={{ fontSize: "10px" }}>{users[2].total_won}</p>
        </div>
      </div>
    </>
  );
}

export default AdminHomeLeaderBoard;
