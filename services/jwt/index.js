const jwt = require('jsonwebtoken')

const { JWT_SECRET: jwtSecret } = process.env

function createAccessToken(payload) {
  return jwt.sign(payload, jwtSecret)
}

function verifyToken(token) {
  return jwt.verify(token, jwtSecret)
}

module.exports = {
  createAccessToken,
  verifyToken,
}