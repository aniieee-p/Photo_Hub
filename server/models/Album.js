const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  coverPhoto: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Album', albumSchema);
