import React, { useState } from "react";
import Bar from "chart.js/auto";
import "../css/Profile.css";

function Profile() {
  // Mock user data
  const [user, setUser] = useState({
    username: "AdamWutang",
    firstname: "Adam",
    lastname: "Troup",
    email: "adam@example.com",
    dateOfBirth: "2000-01-01",
    profilePictureUrl:
      "https://m.media-amazon.com/images/I/71RDpVmr2hL._UF1000,1000_QL80_.jpg",
    gamesAttended: 20,
    totalWon: 800,
    totalSpent: 1000,
    class: "VIP",
    phoneNumber: "123-456-7890",
    favoriteHand: "Pocket Aces",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  return (
    <>
      <div id="profile-main" className="bg-gray-700">
        <div id="title">
          <h1 className="mr-2">{user.username}</h1>
        </div>
        <div id="profile-img-container">
          <img
            className="profile-img"
            src={user.profilePictureUrl}
            alt="Profile"
          />
        </div>
        {isEditing ? (
          <div id="profile-edit-container">
            <form className="row g-3" id="edit-form">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={user.username}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  value={user.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  value={user.lastname}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="phone-num" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone-num"
                  autoComplete="off"
                  value={user.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="total-spent" className="form-label">
                  Total spent
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="total-spent"
                  autoComplete="off"
                  value={user.totalSpent}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="games-played" className="form-label">
                  Games Played
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="games-played"
                  autoComplete="off"
                  value={user.gamesAttended}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="favorite-hand" className="form-label">
                  Favorite Hand
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="favorite-hand"
                  autoComplete="off"
                  value={user.favoriteHand}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="dob" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="dob"
                  autoComplete="off"
                  value={user.dateOfBirth}
                  onChange={handleChange}
                />
              </div>

              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-primary"
                  id="signup-btn"
                >
                  Submit
                </button>
              </div>
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-danger"
                  id="signup-btn"
                  onClick={handleEditClick}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            <div id="profile-info-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
                id="edit-btn-2"
                onClick={handleEditClick}
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
              </svg>
              <div id="name-container">
                <h4>
                  {user.firstname} {user.lastname}
                </h4>
              </div>
              <p>Email: {user.email}</p>
              <p>Phone Number: {user.phoneNumber}</p>
              <p>Total Spent: ${user.totalSpent}</p>
              <p>Games Attended: {user.gamesAttended}</p>
              <div>
                {user.totalWon / user.totalSpent <= 0.5 && (
                  <p style={{ backgroundColor: "lightcoral" }}>
                    Net Gain: ${user.totalWon - user.totalSpent}
                  </p>
                )}
                {user.totalWon / user.totalSpent > 0.5 &&
                  user.totalWon < user.totalSpent && (
                    <p style={{ backgroundColor: "yellow" }}>
                      Net Gain: ${user.totalWon - user.totalSpent}
                    </p>
                  )}
                {user.totalWon > user.totalSpent && (
                  <p style={{ backgroundColor: "lightgreen" }}>
                    Net Gain: ${user.totalWon - user.totalSpent}
                  </p>
                )}
              </div>
              <p>Class: {user.class}</p>
              <p>Favorite Hand: {user.favoriteHand}</p>
              <p>Date of Birth: {user.dateOfBirth}</p>
            </div>
          </>
        )}
        <br />
        <br />
      </div>
    </>
  );
}

export default Profile;
