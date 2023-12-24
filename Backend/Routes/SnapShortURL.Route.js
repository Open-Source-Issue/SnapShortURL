const express = require('express');
const { handleShortURLGenrated } = require('../Controllers/SnapShortURL')

const router = express.Router();

router.post('/',handleShortURLGenrated);

module.exports = router;
