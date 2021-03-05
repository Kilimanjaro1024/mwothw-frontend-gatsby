import React from 'react'
import '../Header.css'
import { navigate } from "gatsby"

const Header = () => {
    

    return (
        <div className="header">
            <div className="profile-btn" onClick={() => navigate("/profile/")}>
                <img src="https://i.imgur.com/INnsE9J.png" alt="profile"/>
                <h3>Username</h3>
            </div>
            <div className="hmbgr-div">
                <img className="hmbgr" src="https://static.thenounproject.com/png/198756-200.png" alt="profile"/>
            </div>

        </div>
    )

}

export default Header