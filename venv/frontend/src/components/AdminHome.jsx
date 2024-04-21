import React, { useState, useEffect } from "react";
import "../css/AdminHome.css";
import AdminNavbar from "./AdminNavbar.jsx";
import NetRevenue from "./NetRevenue.jsx";
import AdminHomeLine from "./AdminHomeLine.jsx";
import AdminHomeLeaderBoard from "./AdminHomeLeaderboard.jsx";

function AdminHome() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [earnings, setEarnings] = useState({
    playersSpent: 2000,
    playersWon: 1500,
  });
  const [nights, setNights] = useState([]);
  const [users, setUsers] = useState([]);
  const [top3Users, setTop3Users] = useState([]);

  useEffect(() => {
    fetchNights();
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      getTop3Users();
    }
  }, [users]);

  const fetchNights = () => {
    fetch(`http://127.0.0.1:8000/api/nights`).then((response) => {
      if (!response.ok) {
        throw new Error("Failed fetching data");
      } else {
        response.json().then((data) => {
          setNights(data);
        });
      }
    });
  };

  const fetchUsers = () => {
    fetch(`http://127.0.0.1:8000/api/users`).then((response) => {
      if (!response.ok) {
        throw new Error("Failed fetching data");
      } else {
        response.json().then((data) => {
          setUsers(data);
        });
      }
    });
  };

  const getTop3Users = () => {
    if (users) {
      const sortedUsers = users
        .slice()
        .sort((a, b) => b.total_won - a.total_won);
      const top3Users = sortedUsers.slice(0, 3);
      console.log(top3Users)
      setTop3Users(top3Users);
    }
  };

  const handleHover = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 1000); // 3000 milliseconds = 3 seconds
  };

  return (
    <>
      <AdminNavbar />
      <div className="admin-home-main">
        <div className="top-row">
          <div className="top-left-container">
            {top3Users.length > 0 && <AdminHomeLeaderBoard users={top3Users} />}
          </div>
          <div className="top-right-container">
            <AdminHomeLine />
          </div>
        </div>
        <div className="bottom-row">
          <div className="bottom-left-container">
            <NetRevenue earnings={earnings} />
          </div>
          <div className="bottom-middle-container">
            <div>
              <p style={{ fontSize: "15px", marginTop: "10%" }}>
                Siphon $20 from all users’ bank accounts
              </p>
            </div>
            <div
              className="nuke-btn-container"
              onMouseEnter={handleHover}
              onMouseLeave={() => setShowOverlay(false)}
            >
              <img src="../src/assets/nuclear-btn.png" id="nuke-pic" />
              {showOverlay && <div className="overlay"></div>}
            </div>
            <div style={{ marginTop: "27.5%" }}>
              <p style={{ fontSize: "10px" }}>
                This button remains a secret to those who press it
              </p>
            </div>
          </div>
          <div className="bottom-right-container">
            <form>
              <p>List a new night</p>
              <div className="form-group mb-3">
                <label htmlFor="date">Date</label>
                <input type="date" className="form-control" id="date" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="buy-in">Buy in</label>
                <input
                  type="number"
                  className="form-control"
                  id="buy-in"
                  placeholder="10"
                />
              </div>
              <button className="btn btn-primary" id="add-btn">
                Add night
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
