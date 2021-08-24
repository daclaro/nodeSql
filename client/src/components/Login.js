import React, { useState, useEffect } from 'react'
import login from '../services/login.js'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const handleClick = (email, password) => (e) => {
    e.preventDefault()
    return login({ user_email: email, user_password: password })
  }
  return (
    <div>
      <div>
        <div className='main-container-login'>
          <form action method='post'>
            <div className='invalid'>Invalid credentials</div>
            <h1>Sign In</h1>
            <input
              type='text'
              placeholder='email'
              name='email'
              value={email}
              onChange={handleEmail}
            />
            <br />
            <input
              type='text'
              placeholder='password'
              name='password'
              value={password}
              onChange={handlePassword}
            />
            <br />
            <button className='register' onClick={handleClick(email, password)}>
              Login
            </button>
          </form>
          <div className='noacc'>
            don't have an account <a href>Sign up</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
