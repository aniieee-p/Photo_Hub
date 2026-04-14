const router = require('express').Router();
const auth = require('../middleware/auth');
const Photo = require('../models/Photo');
const Album = require('../models/Album');
const User = require('../models/User');
const { upload, deleteFromS3 } = require('../config/storage');

// Upload photos
router.post('/upload', auth, upload.array('photos'), async (req, res) => {
  try {
    const { albumId } = req.body;
    const photos = await Promise.all(
      req.files.map((f) =>
        Photo.create({
          url: f.location,        // full S3 URL e.g. https://bucket.s3.region.amazonaws.com/photos/...
          publicId: f.key,        // S3 key e.g. photos/1234567-file.jpg
          filename: f.originalname,
          size: f.size,
          owner: req.user.id,
          album: albumId || null,
        })
      )
    );
    const totalSize = req.files.reduce((s, f) => s + f.size, 0);
    await User.findByIdAndUpdate(req.user.id, { $inc: { storageUsed: totalSize } });
    if (albumId && photos.length > 0) {
      await Album.findByIdAndUpdate(albumId, { coverPhoto: photos[0].url });
    }
    res.status(201).json(photos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all photos
router.get('/', auth, async (req, res) => {
  try {
    const { search, album, favorites, trash } = req.query;
    const query = { owner: req.user.id };
    if (favorites === 'true') query.isFavorite = true;
    query.isTrashed = trash === 'true';
    if (album) query.album = album;
    if (search) query.filename = { $regex: search, $options: 'i' };
    const photos = await Photo.find(query).sort({ createdAt: -1 });
    res.json(photos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Toggle favorite
router.patch('/:id/favorite', auth, async (req, res) => {
  try {
    const photo = await Photo.findOne({ _id: req.params.id, owner: req.user.id });
    if (!photo) return res.status(404).json({ message: 'Not found' });
    photo.isFavorite = !photo.isFavorite;
    await photo.save();
    res.json(photo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Trash / restore
router.patch('/:id/trash', auth, async (req, res) => {
  try {
    const photo = await Photo.findOne({ _id: req.params.id, owner: req.user.id });
    if (!photo) return res.status(404).json({ message: 'Not found' });
    photo.isTrashed = !photo.isTrashed;
    await photo.save();
    res.json(photo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Move to album
router.patch('/:id/move', auth, async (req, res) => {
  try {
    const photo = await Photo.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      { album: req.body.albumId || null },
      { new: true }
    );
    res.json(photo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete permanently
router.delete('/:id', auth, async (req, res) => {
  try {
    const photo = await Photo.findOne({ _id: req.params.id, owner: req.user.id });
    if (!photo) return res.status(404).json({ message: 'Not found' });
    await deleteFromS3(photo.publicId);
    await User.findByIdAndUpdate(req.user.id, { $inc: { storageUsed: -photo.size } });
    await photo.deleteOne();
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
