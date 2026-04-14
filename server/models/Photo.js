const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  url: { type: String, required: true },
  publicId: { type: String, required: true },
  filename: { type: String, required: true },
  size: { type: Number, default: 0 },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album', default: null },
  isFavorite: { type: Boolean, default: false },
  isTrashed: { type: Boolean, default: false },
  tags: [String],
}, { timestamps: true });

module.exports = mongoose.model('Photo', photoSchema);
