const Press = require('../Models/Press.model');

async function listPress(req, res) {
  try {
    const items = await Press.find().sort({ publishedAt: -1 }).lean();
    res.json(items);
  } catch (err) {
    console.error('DB error, returning fallback press items:', err);
    // Fallback sample data for development when DB isn't available
    const fallback = [
      {
        _id: 'fallback-1',
        title: 'SnapShortURL Launches Beta',
        slug: 'snapshorturl-launches-beta',
        summary: 'Introducing SnapShortURL — a streamlined URL shortening service for teams and developers.',
        content: '<p>SnapShortURL is launching its beta with support for branded links, QR codes, and analytics.</p>',
        author: 'SnapShortURL Team',
        publishedAt: new Date().toISOString(),
        tags: ['launch', 'product'],
      },
      {
        _id: 'fallback-2',
        title: 'SnapShortURL Integrates QR Codes',
        slug: 'snapshorturl-integrates-qr-codes',
        summary: 'QR code support is now available in SnapShortURL.',
        content: '<p>Generate QR codes for any short link directly from the dashboard.</p>',
        author: 'SnapShortURL Team',
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
        tags: ['product'],
      },
    ];
    res.json(fallback);
  }
}

async function getPressBySlug(req, res) {
  try {
    const slug = req.params.slug;
    const item = await Press.findOne({ slug }).lean();
    if (!item) return res.status(404).send('Not found');
    res.json(item);
  } catch (err) {
    console.error('DB error in getPressBySlug, returning fallback if matches:', err);
    // Fallback behavior: map sample items
    const fallbackMap = {
      'snapshorturl-launches-beta': {
        _id: 'fallback-1',
        title: 'SnapShortURL Launches Beta',
        slug: 'snapshorturl-launches-beta',
        summary: 'Introducing SnapShortURL — a streamlined URL shortening service for teams and developers.',
        content: '<p>SnapShortURL is launching its beta with support for branded links, QR codes, and analytics.</p>',
        author: 'SnapShortURL Team',
        publishedAt: new Date().toISOString(),
      },
      'snapshorturl-integrates-qr-codes': {
        _id: 'fallback-2',
        title: 'SnapShortURL Integrates QR Codes',
        slug: 'snapshorturl-integrates-qr-codes',
        summary: 'QR code support is now available in SnapShortURL.',
        content: '<p>Generate QR codes for any short link directly from the dashboard.</p>',
        author: 'SnapShortURL Team',
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
      }
    };
    const found = fallbackMap[req.params.slug];
    if (found) return res.json(found);
    res.status(500).send('Internal Server Error');
  }
}

// For admin/testing: create a press item
async function createPress(req, res) {
  try {
    const body = req.body;
    if (!body.title || !body.slug) return res.status(400).send('title and slug required');
    const newItem = new Press(body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { listPress, getPressBySlug, createPress };
