const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const pool = require('./db')

app.use(express.json())

const notesRouter = require('./routes/api/notes.js')
const usersRouter = require('./routes/api/users.js')
const authRouter = require('./routes/api/auth.js')
app.use(cors())
app.use('/api/notes', notesRouter)
app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on port ${port}`))
