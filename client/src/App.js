import './App.css'
import React, { useState, useEffect } from 'react'
import Landing from './components/Landing.js'
import Register from './components/Register.js'
import Login from './components/Login.js'
import Post from './components/Post.js'
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/login'>
            <Navbar />
            <Login />
          </Route>
          <Route path='/register'>
            <Navbar />
            <Register />
          </Route>
          <Route path='/post'>
            <Navbar />
            <Post />
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
