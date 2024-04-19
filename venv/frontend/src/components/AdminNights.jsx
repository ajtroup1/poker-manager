import React, { useState, useEffect } from "react";
import "../css/Book.css";

function AdminNights() {
  const [nights, setNights] = useState([]);

  useEffect(() => {
    setNights(getNights());
  });

  const getNights = () => {
    const data = [
      {
        date: "2024-4-16",
        totalPot: 200,
        players: 8,
        buyIn: 10,
      },
      {
        date: "2024-4-17",
        totalPot: 250,
        players: 6,
        buyIn: 15,
      },
      {
        date: "2024-4-18",
        totalPot: 180,
        players: 7,
        buyIn: 12,
      },
      {
        date: "2024-4-19",
        totalPot: 300,
        players: 10,
        buyIn: 20,
      },
      {
        date: "2024-4-14",
        totalPot: 300,
        players: 10,
        buyIn: 20,
      },
    ];
    return data;
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-700">
        <div id="book-main" className="flex-grow">
          <div id="title">
            <h1>All upcoming poker nights</h1>
          </div>
          <br />
          <div id="nights-table">
            <table class="table" style={{ height: "100%" }}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Players</th>
                  <th>Buy-in</th>
                  <th>Total Pot</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {nights.map((night) => (
                  <tr key={night.date}>
                    <td>{night.date}</td>
                    <td>{night.players} / 10</td>
                    <td>${night.buyIn}</td>
                    <td>${night.totalPot}</td>
                    <td>
                      <button className="btn btn-primary">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminNights;
