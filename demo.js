import bcrypt from 'bcrypt'

// Encode credentials into a basic auth header
const credential = 'imauser:supersecret'
const header = `Basic ${btoa(credential)}`
console.log(header)

// Decode the basic auth header
const base64 = header.split(' ')[1]
const [username, password] = atob(base64).split(':')
console.log(username)
console.log(password)

// Hash the password
const hash = await bcrypt.hash(password, 10)
console.log(hash)

// Compare passwords
const result = await bcrypt.compare(password, hash)
console.log(result)

// Compare wrong password
const result2 = await bcrypt.compare('wrong', hash)
console.log(result2)
