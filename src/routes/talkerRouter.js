const express = require('express');
const talkerFS = require('../data/talkerFS');
const { talkerValidation, tokenValidation } = require('../middleware');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const talkerList = await talkerFS.readTalkerFile();
    res.status(200).json(talkerList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const talkerInfo = await talkerFS.getTalkerById(id);
    if (talkerInfo) return res.status(200).json(talkerInfo);
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', tokenValidation, talkerValidation, async (req, res) => {
  const newTalker = req.body;
  const talkerWithId = await talkerFS.writeTalkerFile(newTalker);
  res.status(201).json({ ...talkerWithId });
});

module.exports = router;
