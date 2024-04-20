import React, { useState, useEffect } from "react";
import "../css/UserHome.css";
import HandIcon from "./HandIcon";
import Navbar from "./Navbar";
import ProfileDisplay from "./ProfileDisplay";
import NextNight from "./NextNight";
import PreviousNight from "./PreviousNight";
import BottomCharts from "./BottomCharts";

function UserHome() {
  const [user, setUser] = useState({
    id: 0,
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    date_of_birth: "0000-00-00",
    games_attended: 0,
    total_won: 0,
    total_spent: 0,
    player_class: "Base",
    phone_number: "000-000-0000",
    favorite_hand: "Ace of spades Ace of hearts",
  });
  const [nextNight, setNextNight] = useState({
    date: "0000-00-00",
    totalPot: 0,
    players: 0,
    buyIn: 0,
  });

  const [userPreviousNight, setUserPreviousNight] = useState({
    date: "2024-04-08",
    totalWon: 28,
    totalSpent: 10,
  });

  const [recentUserNights, setRecentUserNights] = useState([])

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch user data and next night data
    fetchUserData();
    fetchNextNightData();
  }, []);

  useEffect(() => {
    // Check if both user data and next night data are fetched
    // If both are fetched, set isLoading to false
    if (user && nextNight && nextNight.date !== "0000-00-00") {
      fetchUserPreviousNightData();
      setIsLoading(false);
    }
  }, [user, nextNight]);

  const fetchUserData = () => {
    fetch("http://127.0.0.1:8000/api/user/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        // console.log(data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  };

  const fetchNextNightData = () => {
    fetch("http://127.0.0.1:8000/api/nights")
      .then((response) => response.json())
      .then((data) => {
        const dates = data.map((night) => new Date(night.date));
        const currentDate = new Date();
        const upcomingDates = dates.filter((date) => date > currentDate);
        let nearestDate = null;
        upcomingDates.forEach((date) => {
          if (!nearestDate || date < nearestDate) {
            nearestDate = date;
          }
        });

        const nextNightx = data.find(
          (night) => new Date(night.date).getTime() === nearestDate.getTime()
        );
        setNextNight(nextNightx);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching night data:", error));
  };

  const fetchUserPreviousNightData = () => {
    fetch(`http://127.0.0.1:8000/api/usernights-by-user/${user.id}`)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => new Date(b.date) - new Date(a.date));

        const mostRecentUserNight = data[0]; // Assumes data is not empty
        const recentUserNights = data.slice(0, 10); // Array of no more than 10 most recent nights

        // console.log("Most recent usernight: ", mostRecentUserNight);
        

        setUserPreviousNight(mostRecentUserNight);
        setRecentUserNights(recentUserNights);
      })
      .catch((error) =>
        console.error("Error fetching user previous night data:", error)
      );
  };




  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="main">
          <div className="left-nav">
            <div className="logo-container">
              <img src="../src/assets/poker-logo.png" alt="Poker Logo" />
            </div>
            {user && <ProfileDisplay user={user} />}
          </div>
          <div className="right-container">
            <Navbar />
            <div className="right-main">
              <div className="top-third-container">
                <div className="top-left-container">
                  {userPreviousNight && (
                    <PreviousNight night={userPreviousNight} />
                  )}
                </div>
                <div className="top-right-container">
                  <div style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "20px" }}>Favorite Hand</p>
                    {user && <HandIcon favoriteHand={user.favorite_hand} />}
                  </div>
                </div>
              </div>
              <div className="next-night-container">
                {nextNight && <NextNight night={nextNight} userNights={recentUserNights} userId={user.id}/>}
              </div>

              <div className="bottom-third-container">
                {user && <BottomCharts user={user} userNights={recentUserNights} />}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserHome;
