import React from "react";

function ProfileDisplay({ user }) {
  return (
    <div className="profile-display-container">
      <div className="profile-img-container">
        <img src={user.profile_url} id="profile-img" />
      </div>
      <p>{user.username}</p>
    </div>
  );
}

export default ProfileDisplay;
