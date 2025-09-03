const Listing = require('../models/listing');

async function getListings(req, res) {
  try {
    const {
      page = '1',
      limit = '10',
      minRent,
      maxRent,
      location,
      available,
      q,
    } = req.query || {};

    const filter = {};
    if (minRent) filter.rent = { ...(filter.rent || {}), $gte: Number(minRent) };
    if (maxRent) filter.rent = { ...(filter.rent || {}), $lte: Number(maxRent) };
    if (location) filter.location = location;
    if (available != null) filter.available = String(available) === 'true';
    if (q) filter.$text = { $search: String(q) };

    const pageN = Math.max(1, Number(page) || 1);
    const limitN = Math.min(100, Math.max(1, Number(limit) || 10));

    const [items, total] = await Promise.all([
      Listing.find(filter)
        .sort({ createdAt: -1 })
        .skip((pageN - 1) * limitN)
        .limit(limitN)
        .lean(),
      Listing.countDocuments(filter),
    ]);

    return res.json({
      listings: items,
      totalPages: Math.ceil(total / limitN),
      currentPage: pageN,
      total,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message || 'Server error' });
  }
}

async function getListingById(req, res) {
  try {
    const { id } = req.params;
    const doc = await Listing.findById(id).populate('postedBy', 'name');
    if (!doc) return res.status(404).json({ message: 'Not found' });
    return res.json(doc);
  } catch (e) {
    return res.status(500).json({ message: e.message || 'Server error' });
  }
}

async function createListing(req, res) {
  try {
    const userId = req.user?.userId;
    const body = req.body || {};
    const path = require('path');
    const files = Array.isArray(req.files) ? req.files : (req.file ? [req.file] : []);
    const images = files.length
      ? files.map((f) => `/uploads/${path.basename(f.path)}`)
      : [];

    const doc = await Listing.create({
      title: body.title,
      description: body.description,
      rent: Number(body.rent),
      location: body.location,
      available: body.available !== 'false',
      availableFrom: body.availableFrom ? new Date(body.availableFrom) : undefined,
      images,
      postedBy: userId || undefined,
    });
    return res.status(201).json(doc);
  } catch (e) {
    return res.status(500).json({ message: e.message || 'Server error' });
  }
}

module.exports = { getListings, getListingById, createListing };
