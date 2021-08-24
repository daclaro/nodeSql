import React from 'react'
const Post = () => {
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
            />
            <button>Submit</button>
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
        </div>
      </div>
    </div>
  )
}

export default Post
