import React from 'react'
import axios from 'axios'

const MyPosts = (props) => {
    const [posts, setPosts] = React.useState([])

    const url = "http://localhost:3000"

    const getMyPosts = () => {
        axios.get(url + props.path, {
            headers: {'authorization': 'bearer ' + sessionStorage.getItem('token')}
        }).then((posts) => {
            console.log(posts)
            setPosts(posts.data)
        })
    }

    React.useEffect(() => {
        getMyPosts()
    }, [])

    return(
        <div>
            {posts.map((post, index) => {
                return(
                    <div>
                        <h1>{post.title}-{post.username}</h1>
                        <h1>{post.content}</h1>
                        <h1>{post.likes}</h1>
                    </div>
                )
            })}
        </div>
        
    )
}

export default MyPosts