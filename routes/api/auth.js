require('dotenv').config()
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../../db.js')
const authsRouter = express.Router()
//login
authsRouter.post('/', async (req, res) => {
  const { user_email, user_password } = req.body

  const query1 = await pool.query(
    'SELECT user_id,user_email,user_password FROM users WHERE user_email=$1',
    [user_email]
  )
  if (query1.rows.length === 0) {
    res.status(401).json({ msg: 'Provide a valid registered email' })
  }
  const password = query1.rows[0].user_password
  console.log(` query1.rows[0].user_password is ${password} `)
  const okayPassword = await bcrypt.compare(user_password, password)
  console.log(`user_password is ${user_password}`)
  console.log(okayPassword)
  if (!okayPassword) {
    res.status(401).json({ msg: 'Wrong password' })
  }
  const payload = { user: { id: query1.rows[0].user_id } }
  jwt.sign(
    payload,
    //dunno about this bug
    '' + process.env.Sekret,
    { expiresIn: 360000 },
    (err, token) => {
      if (err) {
        throw err
      }
      res.json({ token })
    }
  )
})

module.exports = authsRouter
