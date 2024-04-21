import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/UserHome.css";
import HandIcon from "./HandIcon";
import Navbar from "./Navbar";
import ProfileDisplay from "./ProfileDisplay";
import NextNight from "./NextNight";
import PreviousNight from "./PreviousNight";
import BottomCharts from "./BottomCharts";
import Cookies from "js-cookie";



function UserHome() {
  const location = useLocation();
  const [userId, setUserId] = useState(Cookies.get('userId'))

  const [user, setUser] = useState({});

  const [nextNight, setNextNight] = useState({
    date: "0000-00-00",
    totalPot: 0,
    players: 0,
    buyIn: 0,
  });

  const [userPreviousNight, setUserPreviousNight] = useState({
    user: 0,
    date: "0000-00-00",
    night: 0,
    total_won: 0,
    total_spent: 0,
  });

  const [recentUserNights, setRecentUserNights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
      fetchNextNightData();
    }
  }, [userId]);

  useEffect(() => {
    if (nextNight && nextNight.date !== "0000-00-00") {
      fetchUserPreviousNightData();
    }
  }, [nextNight]);

  const fetchUserData = (userId) => {
    fetch(`http://127.0.0.1:8000/api/user/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((data) => {
        // Assuming data contains the user object
        setUser(data);
        // console.log(data);
        fetchUserPreviousNightData(data.id);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const fetchNextNightData = () => {
    fetch("http://127.0.0.1:8000/api/nights")
      .then((response) => response.json())
      .then((data) => {
        const currentDate = new Date();
        const upcomingNights = data.filter(
          (night) => new Date(night.date) > currentDate
        );

        if (upcomingNights.length > 0) {
          // Find the next night by sorting the upcoming nights by date
          upcomingNights.sort((a, b) => new Date(a.date) - new Date(b.date));
          const nextNightx = upcomingNights[0];
          setNextNight(nextNightx);
        } else {
          // If there are no upcoming nights, set nextNight to null or a default value
          setNextNight(null);
        }
      })
      .catch((error) => console.error("Error fetching night data:", error));
  };

  const fetchUserPreviousNightData = () => {
    fetch(`http://127.0.0.1:8000/api/usernights-by-user/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user previous night data");
        }
        return response.json();
      })
      .then((data) => {
        const currentDate = new Date();
        // Filter out user nights that are in the future
        const filteredData = data.filter(
          (userNight) => new Date(userNight.date) <= currentDate
        );

        if (filteredData.length === 0) {
          // Handle case when there are no previous nights or all are in the future
        } else {
          // Sort the filtered data by date in descending order
          filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));

          // Set the most recent user night as the userPreviousNight
          const mostRecentUserNight = filteredData[0];
          setUserPreviousNight(mostRecentUserNight);

          // Set the filtered data as recentUserNights
          setRecentUserNights(filteredData);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user previous night data:", error);
        setIsLoading(false);
      });
  };




  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="main">
          {/* Left Navigation Section */}
          <div className="left-nav">
            <div className="logo-container">
              <img src="../src/assets/poker-logo.png" alt="Poker Logo" />
            </div>
            <ProfileDisplay user={user} userId={userId} />
          </div>
          {/* Right Container Section */}
          <div className="right-container">
            <Navbar />
            {/* Right Main Section */}
            <div className="right-main">
              {/* Top Third Container */}
              <div className="top-third-container">
                <div className="top-left-container">
                  {userPreviousNight && (
                    <>
                      <PreviousNight userPreviousNight={userPreviousNight} />
                    </>
                  )}
                </div>
                <div className="top-right-container">
                  <div style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "20px" }}>Favorite Hand</p>
                    {user && <HandIcon favoriteHand={user.favorite_hand} />}
                  </div>
                </div>
              </div>
              {/* Next Night Container */}
              <div className="next-night-container">
                {nextNight && (
                  <NextNight
                    night={nextNight}
                    userNights={recentUserNights}
                    userId={user.id}
                  />
                )}
              </div>
              {/* Bottom Third Container */}
              <div className="bottom-third-container">
                {user && (
                  <BottomCharts user={user} userNights={recentUserNights} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserHome;
