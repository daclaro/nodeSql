import './App.css'
import React, { useState, useEffect } from 'react'
import Landing from './components/Landing.js'
import Register from './components/Register.js'
import Login from './components/Login.js'
import Post from './components/Post.js'
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  const [token, setToken] = useState('')
  return (
    <>
      <Router>
        <Switch>
          <Route path='/post'>
            <Navbar />
            <Post token={token} />
          </Route>
          <Route path='/login'>
            <Navbar />
            <Login setToken={setToken} />
          </Route>
          <Route path='/register'>
            <Navbar />
            <Register />
          </Route>

          <Route path='/'>
            <Navbar />
            <Landing />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
