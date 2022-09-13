const express = require('express');
const talkerFS = require('../data/talkerFS');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const talkerFile = await talkerFS.readTalkerFile();
    res.status(200).json(talkerFile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
