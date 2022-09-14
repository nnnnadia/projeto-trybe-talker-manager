const express = require('express');
const { generateToken } = require('../data/loginRes');

const router = express.Router();

router.post('/', (_req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = router;
