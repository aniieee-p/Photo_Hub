const router = require('express').Router();
const auth = require('../middleware/auth');
const Album = require('../models/Album');
const Photo = require('../models/Photo');

router.get('/', auth, async (req, res) => {
  try {
    const albums = await Album.find({ owner: req.user.id }).sort({ createdAt: -1 });
    res.json(albums);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const album = await Album.create({ ...req.body, owner: req.user.id });
    res.status(201).json(album);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const album = await Album.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      req.body,
      { new: true }
    );
    res.json(album);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    await Album.findOneAndDelete({ _id: req.params.id, owner: req.user.id });
    await Photo.updateMany({ album: req.params.id }, { album: null });
    res.json({ message: 'Album deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
