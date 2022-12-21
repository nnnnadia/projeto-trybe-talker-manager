const express = require('express');
const { generateToken } = require('../data/loginRes');
const { loginValidation } = require('../middleware');

const router = express.Router();

router.post('/', loginValidation, (_req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = router;
