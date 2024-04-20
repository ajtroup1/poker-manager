import React, { useState } from "react";
import "../css/ProfileDisplay.css";

function ProfileDisplay({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Prepare the edited user data to be sent to the server
    const editedUserData = {
      ...editedUser,
      // Additional fields can be added if needed
    };

    // Send a PUT request to the API endpoint to update the user data
    fetch(`http://127.0.0.1:8000/api/edit-user/${editedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedUserData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update user data");
        }
        // Optionally, you can handle success response here
        // For example, display a success message
        console.log("User data updated successfully");
        // Reset the edited user data and exit edit mode
        setEditedUser({ ...user });
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
        // Optionally, you can display an error message to the user
      });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className="profile-display-container">
        <div className="profile-img-container">
          <img src={user.profile_url} id="profile-img" alt="Profile" />
        </div>
        <div className="username-container">
          <p>
            <span className="">{user.username}</span>
          </p>
          <p style={{ fontSize: "20px" }}>{user.player_class}</p>
        </div>
      </div>
      <div className="other-container">
        <div className="contact-info">
          <p>{user.email}</p>
          <p>{user.phone_number}</p>
        </div>
        {isEditing ? (
          <div className="edit-form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      name="firstname"
                      value={editedUser.firstname}
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
                      value={editedUser.username}
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
                      value={editedUser.date_of_birth}
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
                      value={editedUser.profile_url}
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
                      value={editedUser.lastname}
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
                      value={editedUser.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone_number">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone_number"
                      name="phone_number"
                      value={editedUser.phone_number}
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
                      value={editedUser.favorite_hand}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
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
        ) : (
          <div>
            <span className="edit-profile" onClick={handleEditClick}>
              Edit profile information
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileDisplay;
