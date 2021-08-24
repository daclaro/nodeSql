import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import exporta from '../services/postService.js'
const { postService, getPostService } = exporta
const Post = (props) => {
  const [post, setPost] = useState('')
  const [posts, setPosts] = useState(['asa'])
  const handlePost = (e) => {
    e.preventDefault()
    setPost(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    postService({ note_content: post, note_important: true }, props.token)
    setPosts(posts.concat(post))
  }
  useEffect(async () => {
    const postsz = await getPostService()
    const arrayContent = postsz.map((x) => x.note_content)
    setPosts(arrayContent)
  }, [])
  return (
    <div>
      <div>
        <div className='main-container-posts'>
          <h1>Posts</h1>
          <h3>Welcome to the community!</h3>
          <div className='say'>Say Something...</div>
          <form action method='post' className='forma'>
            <textarea
              name='text'
              cols={30}
              rows={5}
              placeholder='Create a post'
              required
              defaultValue={''}
              value={post}
              onChange={handlePost}
            />
            <button onClick={handleSubmit}>Submit</button>
          </form>
          <div className='post1'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              possimus corporis sunt necessitatibus! Minus nesciunt soluta
              suscipit nobis. Amet accusamus distinctio cupiditate blanditiis
              dolor? Illo perferendis eveniet cum cupiditate aliquam?
            </p>
            <p className='date'>Posted on 04/16/2019</p>
            <button>Delete</button>
          </div>

          {posts.map((post) => (
            <div className='post1'>
              <p>{post}</p>
              <p className='date'>Posted on 04/16/2019</p>
              <button>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Post
