const User = require('../models/user');
const { hash, compare } = require('../utils/password');
const { signToken } = require('../utils/jwt');

async function register(req, res) {
  try {
    const { name, email, password } = req.body || {};
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email and password required' });
    }
    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: 'Email in use' });
    const passwordHash = await hash(password);
    const user = await User.create({ name, email, passwordHash });
    const token = signToken({ userId: user.id });
    return res.status(201).json({ token });
  } catch (e) {
    return res.status(500).json({ message: e.message || 'Server error' });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }
    const user = await User.findOne({ email });
    if (!user || !user.passwordHash) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const ok = await compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
    const token = signToken({ userId: user.id });
    return res.json({ token });
  } catch (e) {
    return res.status(500).json({ message: e.message || 'Server error' });
  }
}

async function me(req, res) {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });
    const user = await User.findById(userId).select('name email avatarUrl createdAt');
    return res.json({ user });
  } catch (e) {
    return res.status(500).json({ message: e.message || 'Server error' });
  }
}

module.exports = { register, login, me };

