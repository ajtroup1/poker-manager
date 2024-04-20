import React, { useState } from "react";
import { PieChart, LineChart, BarChart } from "@mui/x-charts";
import "../css/UserHome.css";
import HandIcon from "./HandIcon";
import Navbar from "./Navbar";
import ProfileDisplay from "./ProfileDisplay";

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
    favorite_hand: "2 of diamonds, 9 of spades",
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
    totalSpent: 10,
  });
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
          <ProfileDisplay user={user} />
          <div className="other-container">{/*  */}</div>
        </div>
        <div className="right-container">
          <Navbar />
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
                  <p>
                    ($
                    {userPreviousNight.totalSpent - userPreviousNight.totalWon})
                  </p>
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
