require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const app = express()
app.use(express.json())
const usersRouter = express.Router()
const pool = require('../../db.js')

usersRouter.get('/', async (req, res) => {
  try {
    console.log('hi')
    const users = await pool.query('SELECT * FROM USERS')
    res.json(users.rows)
  } catch (error) {
    console.error(error.message)
  }
})

usersRouter.post('/', async (req, res) => {
  try {
    const { user_name, user_email, user_password } = req.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(user_password, saltRounds)
    const newUsers = await pool.query(
      'INSERT INTO users(user_name, user_email, user_password) VALUES ($1,$2,$3) RETURNING *',
      [user_name, user_email, passwordHash]
    )
    const payload = { user: { id: newUsers.rows[0].user_id } }
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
    console.log(newUsers.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

module.exports = usersRouter
