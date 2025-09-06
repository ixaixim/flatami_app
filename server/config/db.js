const mongoose = require('mongoose');

function isValidMongoUri(uri) {
  if (typeof uri !== 'string' || !uri.trim()) return false;
  return uri.startsWith('mongodb://') || uri.startsWith('mongodb+srv://');
}

async function connectDB() {
  const uri = process.env.MONGO_URI;

  if (!isValidMongoUri(uri)) {
    console.error(
      'DB connection error: invalid or missing MONGO_URI. Ensure it starts with "mongodb://" or "mongodb+srv://" and is not quoted.'
    );
    return process.exit(1);
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('DB connection error:', err);
    process.exit(1);
  }
}

module.exports = connectDB;
