const bcrypt = require('bcryptjs');

async function hash(plain) {
  return bcrypt.hash(plain, 10);
}

async function compare(plain, hashed) {
  if (!hashed) return false;
  return bcrypt.compare(plain, hashed);
}

module.exports = { hash, compare };

