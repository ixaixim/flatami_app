const express = require('express');
const { requireAuth } = require('../middlewares/auth');
const { uploadSingle, uploadArray } = require('../middlewares/upload');
const {
  getListings,
  getListingById,
  createListing,
} = require('../controllers/listingController');

const router = express.Router();

router.get('/', getListings);
router.get('/:id', getListingById);
// Accept either single image or array; using array for flexibility
router.post('/', requireAuth, (req, res, next) => {
  // Try array first, then single as a fallback
  uploadArray(req, res, (err) => {
    if (err) return next(err);
    if (req.files && req.files.length) return createListing(req, res);
    return uploadSingle(req, res, (err2) => (err2 ? next(err2) : createListing(req, res)));
  });
});

module.exports = router;

