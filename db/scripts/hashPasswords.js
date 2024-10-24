import { db } from '../config.js'
import bcrypt from 'bcrypt'

const users = await db.raw('SELECT id, password FROM users')

for (const { id, password } of users) {
  const hashedPassword = await bcrypt.hash(password, 10)
  const sql = 'UPDATE users SET password = ? WHERE id = ?'
  await db.raw(sql, [hashedPassword, id])
}

await db.destroy()
