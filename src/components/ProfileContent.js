import React from 'react'
import Profile from './Profile'
import MyPosts from './MyPosts'
import AccountInfo from "./AccountInfo"

const ProfileContent = (props) => {
    

    if(props.content === "Posts"){
        return(
            <MyPosts path="/profile/posts"/>
        )
    }
    else if(props.content === "Liked"){
        return(
            <div>Liked Posts</div>
            // <MyPosts path="/profile/liked"/>
        )
    }
    else if(props.content === "Info"){
        return(
            <AccountInfo/>
        )
    }
    
}

export default ProfileContent