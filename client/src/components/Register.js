import React, { useState, useEffect } from 'react'
import register from '../services/register.js'
const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpw, setConfirmpw] = useState('')

  const handleName = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const handleConfirmpw = (e) => {
    e.preventDefault()
    setConfirmpw(e.target.value)
  }

  const handleClick = (name, email, password, confirmpw) => (e) => {
    e.preventDefault()
    if (password === confirmpw) {
      return register({
        user_name: name,
        user_email: email,
        user_password: password,
      })
    } else {
      console.log('passwords dont match')
    }
  }
  return (
    <div>
      <div>
        <div className='main-container-register'>
          <form action method='post'>
            <h1>Sign up</h1>
            <input
              type='text'
              placeholder='name'
              name='name'
              onChange={handleName}
            />
            <br />
            <input
              type='text'
              placeholder='email'
              name='email'
              onChange={handleEmail}
            />
            <br />
            <input
              type='password'
              placeholder='password'
              name='password'
              onChange={handlePassword}
            />
            <br />
            <input
              type='password'
              placeholder='confirm password'
              name='confirm password'
              onChange={handleConfirmpw}
            />
            <br />
            <button
              className='register'
              onClick={handleClick(name, email, password, confirmpw)}
            >
              Sign up
            </button>
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
