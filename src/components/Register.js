import React from "react"
import Link from "gatsby-link"

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <h2>Username:</h2>
            <input type="text" name="username"/>
            <h2>Email:</h2>
            <input type="text" name="email"/>
            <h2>Password:</h2>
            <input type="text" name="password"/>
            <h2>Confirm Password:</h2>
            <input type="text" name="confirm-password"/>
            <input type="submit" value="submit"/>
            
        </div>
    )
}

export default Register