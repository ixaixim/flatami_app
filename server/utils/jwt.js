const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'change_me';
const EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: EXPIRES_IN });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

module.exports = { signToken, verifyToken };

