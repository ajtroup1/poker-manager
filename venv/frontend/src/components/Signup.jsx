import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Signup.css";
import Cookies from "js-cookie";


function Signup() {
  const [editedUser, setEditedUser] = useState({});
  const [confPassword, setConfPassword] = useState(null)
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleConfPasswordChange = (e) => {
    const { value } = e.target;
    setConfPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks for form fields

    // Prepare the edited user data to be sent to the server
    const editedUserData = {
      ...editedUser,
      // Additional fields can be added if needed
    };
    console.log(editedUserData)
    // Send a POST request to create the user data
    fetch(`http://127.0.0.1:8000/api/add-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedUserData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create user data");
        }
        return response.json(); // Parse response body as JSON
      })
      .then((data) => {
        Cookies.set("userId", data.id);
        navigate("/user");
      })
      .catch((error) => {
        console.error("Error creating user data:", error);
        // Optionally, display an error message to the user
      });
  };


  const handleCloseClick = () => {
    navigate("/userlogin");
  };

  return (
    <div className="home-main">
      <div className="title">
        <h1>User Signup</h1>
      </div>
      <div className="signup-form-container">
        <div style={{ margin: "20px", fontSize: "15px" }}>
          <form onSubmit={handleSubmit} id="the-form">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date_of_birth">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date_of_birth"
                    name="date_of_birth"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="profile_url">Profile Picture URL</label>
                  <input
                    type="text"
                    className="form-control"
                    id="profile_url"
                    name="profile_url"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="conf-password">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="conf-password"
                    name="conf-password"
                    onChange={handleConfPasswordChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone_number">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone_number"
                    name="phone_number"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="favorite_hand">Favorite Hand</label>
                  <input
                    type="text"
                    className="form-control"
                    id="favorite_hand"
                    name="favorite_hand"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group" id="btn-container">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseClick}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
