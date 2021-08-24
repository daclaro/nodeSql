import React, { useState, useEffect } from 'react'
import login from '../services/login.js'
const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [invalid, setInvalid] = useState(false)
  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const handleClick = (email, password) => async (e) => {
    e.preventDefault()
    try {
      const token = await login({ user_email: email, user_password: password })
      props.setToken(token.token)
      props.setLogged(true)
      setInvalid(false)
    } catch (error) {
      setInvalid(true)
    }
  }
  return (
    <div>
      <div>
        <div className='main-container-login'>
          {props.logged ? (
            <h1>Thanks for logging in</h1>
          ) : (
            <form action method='post'>
              {invalid ? (
                <div className='invalid'>Invalid credentials</div>
              ) : (
                <></>
              )}

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
                type='password'
                placeholder='password'
                name='password'
                value={password}
                onChange={handlePassword}
              />
              <br />
              <button
                className='register'
                onClick={handleClick(email, password)}
              >
                Login
              </button>
            </form>
          )}

          <div className='noacc'>
            don't have an account <a href>Sign up</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
