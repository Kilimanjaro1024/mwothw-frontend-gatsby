import React from "react"
import Login from "../components/Login"

export default function Home() {
  const url = "http://localhost:8000"
  return (
    <div>
      <Login url={url}/>    
    </div>
  )
}
