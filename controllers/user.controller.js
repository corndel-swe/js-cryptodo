import { db } from '../db/config.js'
import bcrypt from 'bcrypt'

export const createUser = async (req, res) => {
  const { username, email, password } = req.body
  const hashed = await bcrypt.hash(password, 10)

  const sql = `
  INSERT INTO users
  (username, email, password)
  VALUES (?, ?, ?)
  `

  await db.raw(sql, [username, email, hashed])
  res.redirect('/todos')
}
