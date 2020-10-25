const bcrypt = require('bcryptjs')

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('1234567', 10),
    isAdmin: true,
  },
  {
    name: 'User One',
    email: 'one@example.com',
    password: bcrypt.hashSync('1234567', 10),
  },
  {
    name: 'User Two',
    email: 'two@example.com',
    password: bcrypt.hashSync('1234567', 10),
  },
]

module.exports = users
