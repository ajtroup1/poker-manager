import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/AdminHome.css";

function AdminHome() {
  const [recentNight, setRecentNight] = useState({});
  const data = [
    {
      date: "2024-4-20",
      totalPot: 200,
      players: 8,
      buyIn: 10,
    },
    {
      date: "2024-4-22",
      totalPot: 250,
      players: 7,
      buyIn: 10,
    },
    {
      date: "2024-4-16",
      totalPot: 300,
      players: 8,
      buyIn: 15,
    },
    {
      date: "2024-4-24",
      totalPot: 150,
      players: 6,
      buyIn: 10,
    },
  ];

  useEffect(() => {
    getRecentNight();
  }, []);

  const getRecentNight = () => {
    data.sort((a, b) => new Date(a.date) - new Date(b.date));

    const now = new Date();
    let upcomingDate;

    for (const night of data) {
      const nightDate = new Date(night.date);
      if (nightDate > now) {
        upcomingDate = night;
        break;
      }
    }
    setRecentNight(upcomingDate);
    console.log(upcomingDate);
  };
  return (
    <>
      <div id="admin-home-main" className="bg-gray-700">
        <div id="title">Admin Home</div>
        <br />
        <div id="upcoming-night-info">
          <div id="subtitle">
            <h4>Upcoming poker event:</h4>
          </div>
          <div id="upcoming-content">
            <h5>{recentNight.date}</h5>
            <p>Players: {recentNight.players} / 10</p>
            <p>Pot: {recentNight.totalPot}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
