import React from 'react'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div>
      <div className='main-container'>
        <h1 className='big-title childa'>Developer Connector</h1>
        <h2 className='med-title childa'>
          Create a developer profile/portfolio, share posts and get help from
          other developers
        </h2>
        <div className='button-container childa'>
          <button className='register'>
            {' '}
            <Link to='/register'>Sign up</Link>
          </button>

          <button className='login'>
            {' '}
            <Link to='/login'>Login</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landing
