const express = require('express');
const connectDB = require('./config/db');
const config = require('./config');

const app = express();

connectDB();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('API running');
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
