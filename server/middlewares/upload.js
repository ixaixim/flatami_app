const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, path.join(__dirname, '..', 'uploads')),
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, unique + path.extname(file.originalname));
  },
});

function fileFilter(_req, file, cb) {
  const ok = /jpeg|jpg|png|webp/.test(path.extname(file.originalname).toLowerCase());
  cb(ok ? null : new Error('Invalid file type'), ok);
}

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });
const uploadSingle = upload.single('image');
const uploadArray = upload.array('images', 8);

module.exports = { upload, uploadSingle, uploadArray };

