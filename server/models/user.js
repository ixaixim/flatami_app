const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // Password is stored as a bcrypt hash
    passwordHash: { type: String },
    googleId: { type: String },
    facebookId: { type: String },
    avatarUrl: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', userSchema);
