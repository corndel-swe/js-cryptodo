import bcrypt from 'bcrypt'

const password = 'supersecret'

// TODO: Hash the password
const hashed = await bcrypt.hash(password, 10)
console.log(hashed)

// TODO: Compare the hash with wrong password
const result1 = await bcrypt.compare('monkeywrench', hashed)
console.log(result1)

// TODO: Compare the hash with correct password
let result2 = await bcrypt.compare('supersecret', hashed)
console.log(result2)
