function notFound(_req, res) {
  res.status(404).json({ message: 'Route not found' });
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, _req, res, _next) {
  const status = err.status || 500;
  const message = err.message || 'Server error';
  res.status(status).json({ message });
}

module.exports = { notFound, errorHandler };

