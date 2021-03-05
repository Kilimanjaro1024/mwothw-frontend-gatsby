import React from "react"
import ProfileHeader from "./ProfileHeader"
import ProfileContent from "./ProfileContent"
import ProfileNav from "./ProfileNav"

const Profile = () => {
  const [content, setContent] = React.useState("Posts")

  return (
    <div>
      <ProfileHeader />
      <ProfileNav content={content} setContent={setContent}/>
      <ProfileContent content={content}/>
    </div>
  )
}

export default Profile
