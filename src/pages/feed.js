import React from "react"
import Register from "../components/Register"
import Header from "../components/Header"
import RecentPosts from "../components/RecentPosts"
import Link from "gatsby-link"

export default () => (
  <div>
      <Header/>
      <Link to="/new/">Register</Link>
      <RecentPosts/>
  </div>
)
