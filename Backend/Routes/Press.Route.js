const express = require('express');
const { listPress, getPressBySlug, createPress } = require('../Controllers/PressController');

const router = express.Router();

router.get('/', listPress);
router.get('/:slug', getPressBySlug);
router.post('/', createPress); // protected in production

module.exports = router;
