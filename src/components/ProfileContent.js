import React from 'react'
import Profile from './Profile'
import MyPosts from './MyPosts'
import AccountInfo from "./AccountInfo"
import Link from "gatsby-link"


const ProfileContent = (props) => {
    

    if(props.content === "Posts"){
        return(
            <div>
                <Link to="/new/">Register</Link>
                <MyPosts path="/profile/posts"/>
            </div>
        )
    }
    else if(props.content === "Liked"){
        return(
            <MyPosts path="/profile/liked"/>
        )
    }
    else if(props.content === "Info"){
        return(
            <AccountInfo/>
        )
    }
    
}

export default ProfileContent