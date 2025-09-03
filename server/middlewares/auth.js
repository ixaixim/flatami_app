const { verifyToken } = require('../utils/jwt');

function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.split(' ')[1] : null;
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const decoded = verifyToken(token);
    req.user = { userId: decoded.userId };
    return next();
  } catch (_e) {
    return res.status(403).json({ message: 'Invalid/expired token' });
  }
}

module.exports = { requireAuth };

