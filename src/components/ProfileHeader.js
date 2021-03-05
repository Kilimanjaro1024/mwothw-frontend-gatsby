import React from "react"
import "../Header.css"
import { navigate } from "gatsby"

const ProfileHeader = () => {
  return (
    <div className="header">
      <h3 onClick={() => navigate("/feed/")}>Back</h3>
      <div className="profile-btn" onClick={() => navigate("/profile/")}>
        <img src="https://i.imgur.com/INnsE9J.png" alt="profile" />
        <h3>Username</h3>
      </div>
    </div>
  )
}

export default ProfileHeader
