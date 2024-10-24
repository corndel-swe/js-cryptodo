import { db } from '../db/config.js'
import bcrypt from 'bcrypt'

const protect = async (req, res, next) => {
  try {
    const base64Credentials = req.headers.authorization.split(' ')[1]
    const [username, password] = atob(base64Credentials).split(':')

    const user = await db('users').where({ username }).first()
    if (!user) throw new Error(`User ${username} not found.`)

    const result = await bcrypt.compare(password, user.password)
    if (!result) throw new Error('Password invalid.')

    req.user = user
    next()
  } catch (error) {
    console.log(error.message)
    res.set('WWW-Authenticate', 'Basic realm="cryptodo"')
    return res.status(401).send('Invalid credentials.')
  }
}

export default protect
