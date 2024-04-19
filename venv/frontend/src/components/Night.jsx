import React, { useState, useEffect } from "react";

import "../css/Night.css";

function Night(props) {
  const night = {
    date: "2024-4-16",
    totalPot: 200,
    players: 8,
    buyIn: 10,
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(2);
    return `${month}/${day}/${year}`;
  };

  const renderPlayerCount = () => {
    const players = [];
    for (let i = 0; i < 10; i++) {
      if (i < night.players) {
        players.push(
          <svg
            key={`player-${i}`}
            xmlns="http://www.w3.org/2000/svg"
            width="auto"
            height="60"
            color="green"
            fill="currentColor"
            className="bi bi-person-raised-hand"
            viewBox="0 0 16 16"
          >
            <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
            <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
          </svg>
        );
      } else {
        players.push(
          <svg
            key={`empty-${i}`}
            xmlns="http://www.w3.org/2000/svg"
            width="auto"
            height="60"
            color="red"
            fill="currentColor"
            className="bi bi-person-standing"
            viewBox="0 0 16 16"
          >
            <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 6.75v8.5a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2.75a.75.75 0 0 0 1.5 0v-2.5a.25.25 0 0 1 .5 0" />
          </svg>
        );
      }
    }
    return players;
  };

  const getPot = () => {
    let total = 0;
    for (let i = 0; i < night.players; i++) {
      total += night.buyIn;
    }
    return total;
  };

  return (
    <>
      <div id="night-main" className="flex flex-col min-h-screen bg-gray-700">
        <div id="title">
          <h1>{formatDate(night.date)}</h1>
        </div>
        <div id="info" className="mt-4 p-4 bg-gray-800 rounded-lg text-white">
          <h2>Players signed up: {night.players} / 10</h2>
          <div id="players-box" style={{ marginTop: "20px" }}>
            {renderPlayerCount()}
          </div>
          <div id="more-info">
            <p>Buy in: ${night.buyIn}</p>
            <p>Pot: ${getPot()}</p>
          </div>
          <button className="btn btn-light" id="sign-btn">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}

export default Night;
