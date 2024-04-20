import React, { useState } from "react";
import { PieChart, LineChart, BarChart } from "@mui/x-charts";
import "../css/App.css";
import HandIcon from "./HandIcon";

function App() {
  const [user, setUser] = useState({
    username: "adamjtroup",
    password: "12345678",
    firstname: "Adam",
    lastname: "Troup",
    email: "adamt@gmail.com",
    date_of_birth: "2000-01-01",
    profile_url:
      "https://m.media-amazon.com/images/I/81hiJLs5wjL._UF1000,1000_QL80_.jpg",
    games_attended: 10,
    total_won: 750,
    total_spent: 1000,
    player_class: "VIP",
    phone_number: "205-760-2238",
    favorite_hand: "2 of hearts, 9 of spades",
  });
  const [night, setNight] = useState({
    date: "2024-4-16",
    totalPot: 200,
    players: 4,
    buyIn: 10,
  });
  const [userPreviousNight, setUserPreviousNight] = useState({
    date: "2024-04-8",
    totalWon: 28,
    totalSpent: 10
  })
  const [userScores, setUserScores] = useState([
    20, -10, 3, -20, 14, 28, -10, 6, 9, -20,
  ]);

  const splitFavoriteHand = (favoriteHand) => {
    return favoriteHand.split(", ");
  };

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
      <div className="main">
        <div className="left-nav">
          <div className="logo-container">
            <img src="../src/assets/poker-logo.png" />
          </div>
          <div className="profile-display-container">
            <div className="profile-img-container">
              <img src={user.profile_url} id="profile-img" />
            </div>
            <p>{user.username}</p>
          </div>
          <div className="other-container">{/*  */}</div>
        </div>
        <div className="right-container">
          <div className="navbar">
            <div style={{ width: "70%" }}>{/*  */}</div>
            <div className="nav-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-moon-stars"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
              </svg>
            </div>
            <div className="nav-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
              </svg>
            </div>
            <div className="nav-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-bank"
                viewBox="0 0 16 16"
              >
                <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
              </svg>
            </div>
          </div>
          <div className="right-main">
            <div className="top-third-container">
              <div className="top-left-container">
                <BarChart
                  xAxis={[
                    {
                      scaleType: "band",
                      data: ["Total Won", "Total Spent"],
                    },
                  ]}
                  series={[
                    { data: [userPreviousNight.totalWon, 0] }, // Total Won data
                    { data: [0, userPreviousNight.totalSpent] }, // Total Spent data
                  ]}
                  width={200}
                  height={200}
                />
                <div className="last-night-info">
                  <p>Spent: ${userPreviousNight.totalSpent}</p>
                  <p>Made: ${userPreviousNight.totalWon}</p>
                  <p>(${userPreviousNight.totalSpent - userPreviousNight.totalWon})</p>
                </div>
              </div>
              <div className="top-right-container">
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "20px" }}>Favorite Hand</p>
                  <HandIcon favoriteHand={user.favorite_hand} />
                </div>
              </div>
            </div>
            <div className="next-night-container">
              <div className="date-container">
                <div>
                  <p style={{ fontSize: "30px", marginTop: "15px" }}>
                    {night.date}
                  </p>
                </div>
                <div>
                  <p class="animated-gradient">${night.buyIn} buy in</p>
                </div>
              </div>
              <div className="players-container">
                <h2>Players: {night.players} / 10</h2>
                <div className="players-icon-container">{renderPlayers()}</div>
              </div>
              <div style={{ width: "5%" }} />
              <div className="btn-container">
                <button className="btn animated-btn-gradient">Sign up</button>
              </div>
              <div style={{ width: "5%" }} />
            </div>
            <div className="bottom-third-container">
              <div className="bottom-left-container">
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: user.total_won, label: "Total Won" },
                        {
                          id: 1,
                          value: user.total_spent - user.total_won,
                          label: "Money Lost",
                        },
                      ],
                      innerRadius: 40,
                      paddingAngle: 5,
                      cornerRadius: 5,
                    },
                  ]}
                  width={350}
                  height={175}
                />
              </div>
              <div className="bottom-right-container">
                <div className="chart-container">
                  <p style={{ fontSize: "20px", marginBottom: "5px" }}>
                    Last 10 games
                  </p>
                  <LineChart
                    xAxis={[
                      { data: userScores.map((score, index) => index + 1) },
                    ]}
                    series={[
                      {
                        data: userScores,
                        area: true,
                      },
                    ]}
                    width={390}
                    height={160}
                    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                    grid={{ vertical: true, horizontal: true }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
