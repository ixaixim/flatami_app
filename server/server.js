const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const config = require('./config');

const app = express();

connectDB();

// Core middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN || '*', credentials: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.get('/', (_req, res) => {
  res.send('API running');
});
app.use('/api/auth', require('./routes/auth'));
app.use('/api/listings', require('./routes/listings'));

// Error handlers
const { notFound, errorHandler } = require('./middlewares/error');
app.use(notFound);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
