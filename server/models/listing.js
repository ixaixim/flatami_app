const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    rent: { type: Number, required: true },
    location: { type: String, required: true },
    available: { type: Boolean, default: true },
    availableFrom: { type: Date },
    images: [String],
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Listing', listingSchema);
