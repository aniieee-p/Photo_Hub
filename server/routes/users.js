const router = require('express').Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const { upload } = require('../config/storage');

router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/me', auth, async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, email },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/avatar', auth, upload.single('avatar'), async (req, res) => {
  try {
    // f.location is the full S3 URL
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { avatar: req.file.location },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
