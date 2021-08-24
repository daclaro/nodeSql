import React from 'react'
const Register = () => {
  return (
    <div>
      <div>
        <div className='main-container-register'>
          <form action method='post'>
            <h1>Sign up</h1>
            <input type='text' placeholder='name' name='name' />
            <br />
            <input type='text' placeholder='email' name='email' />
            <br />
            <input type='text' placeholder='password' name='password' />
            <br />
            <input
              type='text'
              placeholder='confirm password'
              name='confirm password'
            />
            <br />
            <button className='register'>Sign up</button>
          </form>
          <div className='noacc'>
            Already have an account <a href>Sign in</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
