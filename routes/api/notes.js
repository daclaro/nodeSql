const express = require('express')
const app = express()
app.use(express.json())
const notesRouter = express.Router()
const pool = require('../../db.js')
const auth = require('../../middleware/auth.js')

notesRouter.get('/', async (req, res) => {
  try {
    const notes = await pool.query(
      'SELECT notes.note_id,notes.note_content,notes.note_important,users.user_name,users.user_email FROM NOTES JOIN USERS on Notes.user_id=USERS.user_id'
    )
    res.json(notes.rows)
  } catch (error) {
    console.error(error.message)
  }
})
notesRouter.post('/', auth, async (req, res) => {
  try {
    const user_id = req.user.id
    console.log(req.user.id)
    const { note_content, note_important } = req.body
    //const { user_id, note_content, note_important } = req.body
    const newNotes = await pool.query(
      'INSERT INTO notes(user_id, note_content, note_important) VALUES ($1,$2,$3) RETURNING *',
      [user_id, note_content, note_important]
    )
    res.json(newNotes.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})
module.exports = notesRouter
