import React from "react"
import "../Header.css"
import axios from "axios"
import { navigate } from "gatsby"

const NewPost = props => {
  const url = "http://localhost:3000"

  const createPost = postData => {
    axios
      .post(
        url + "/posts",
        {
          title: postData.title[0],
          topic: postData.topic[0],
          content: postData.content[0],
        },
        {
          headers: {
            authorization: "bearer " + sessionStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        navigate("/feed/")
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  const emptyLoginFormData = {
    title: "",
    topic: "",
    content: "",
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
    createPost(formData) // update passed down state from App.js with the form data
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Title</h1>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <h1>Topic</h1>
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
        />
        <h1>Content</h1>
        <input
          type="text"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default NewPost
