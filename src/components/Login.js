import React from "react"
import Link from "gatsby-link"
import axios from "axios"
import { navigate } from "gatsby"

const Login = props => {
  const handleLogin = loginInfo => {
    axios
      .post(props.url + "/login", {
        username: loginInfo.username[0],
        password: loginInfo.password[0],
      })
      .then(data => {
        sessionStorage.setItem("token", data.data.token)
        console.log(data)
      })
      .then(() => {
        console.log(sessionStorage.getItem("token"))
      })
      .then(() => {
        navigate("/feed/")
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  const emptyLoginFormData = {
    username: "",
    password: "",
  }

  const [formData, setFormData] = React.useState(emptyLoginFormData)

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: [event.target.value],
    })
  }

  const handleSubmit = event => {
    event.preventDefault() // Prevent Form from Refreshing
    console.log(formData)
    handleLogin(formData) // update passed down state from App.js with the form data
  }

  return (
    <div>
      <h1>Login</h1>
      <h2>Username:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <h2>Password:</h2>
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
      <Link to="/register/">Register</Link>
    </div>
  )
}

export default Login
