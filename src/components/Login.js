import React from "react"
import Link from "gatsby-link"

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <h2>Username:</h2>
            <input type="text" name="username"/>
            <h2>Password:</h2>
            <input type="text" name="password"/>
            <input type="submit" value="submit"/>
            <Link to="/register/">Register</Link>
        </div>
    )
}

export default Login