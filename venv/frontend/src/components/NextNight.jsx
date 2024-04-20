import React, { useState, useEffect } from "react";
import "../css/NextNight.css";

function NextNight({ night: passedNight, userNights: userNightsx, userId}) {
  const [night, setNight] = useState(passedNight);
  const [userNights, setUserNights] = useState([]);
  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect(() => {
    setUserNights(userNightsx);
  }, [userNightsx]);

  useEffect(() => {
    isUserInNext(); // This should log the updated userNightsx
  }, [userNights]);

  const isUserInNext = () => {
    for (const userNight of userNights) {
      if (userNight.date === passedNight.date) {
        setIsSignedUp(true);
        console.log("user is in next thing");
        break;
      }
    }
  };

  const signupForNight = () => {
    const data = {
      user: userId,
      date: night.date,
      night: night.id
    }

    fetch(`http://127.0.0.1:8000/api/add-usernight`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update user data");
        }
        setIsSignedUp(true)
        alert("Signed up successfully!");
      })
      .catch((error) => {
        alert("Error signing up for night: ", error);
      });
  }

  const renderPlayers = () => {
    const players = [];
    for (let i = 0; i < 10; i++) {
      if (i < night.players) {
        players.push(
          <svg
            key={`player-${i}`}
            xmlns="http://www.w3.org/2000/svg"
            width="auto"
            height="40"
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
            height="40"
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

  return (
    <>
      <div className="date-container">
        <div>
          <p style={{ fontSize: "30px", marginTop: "15px" }}>{night.date}</p>
        </div>
        <div>
          <p className="animated-gradient">${night.buy_in} buy in</p>
        </div>
      </div>
      <div className="players-container">
        <h2>Players: {night.players} / 10</h2>
        <div className="players-icon-container">{renderPlayers()}</div>
      </div>
      <div style={{ width: "5%" }} />
      <div className="btn-container">
        {isSignedUp == false && (
          <button className="btn animated-btn-gradient" onClick={signupForNight}>Sign up</button>
        )}
        {isSignedUp == true && (
          <p className="animated-gradient" style={{ fontSize: "20px", textAlign: "center"}}>You are signed up!</p>
        )}
      </div>
      <div style={{ width: "5%" }} />
    </>
  );
}

export default NextNight;
