const mongoose = require('mongoose');

const pressSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  summary: { type: String },
  content: { type: String },
  author: { type: String },
  publishedAt: { type: Date, default: Date.now },
  tags: [String],
  featuredImage: { type: String },
  sourceUrl: { type: String }
}, { timestamps: true });

const Press = mongoose.model('Press', pressSchema);
module.exports = Press;
