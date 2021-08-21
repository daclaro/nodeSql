const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
require('dotenv').config()
module.exports = (req, res, next) => {
  const token = req.header('x-auth-token')
  if (!token) {
    return res.status(401).json({ msg: 'provide a token' })
  }
  try {
    const decodedToken = jwt.verify(token, process.env.Sekret)
    console.log(decodedToken)
    req.user = decodedToken.user
    next()
  } catch (error) {
    res.status(401).json({ msg: error.message })
  }
}
