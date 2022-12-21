const express = require('express');
const talkerFS = require('../data/talkerFS');
const { talkerValidation, tokenValidation } = require('../middleware');

const router = express.Router();

router.get('/search', tokenValidation, async (req, res) => {
  const { q } = req.query;
  if (!q) return res.redirect('..');
  try {
    const talkerInfo = await talkerFS.getTalkerByQuery(q);
    if (talkerInfo) return res.status(200).json(talkerInfo);
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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

router.post('/restart', async (req, res) => {
  try {
    await talkerFS.restartTalkerFile();
    res.status(200).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

router.post('/', tokenValidation, talkerValidation, async (req, res) => {
  const newTalker = req.body;
  try {
    const talkerWithId = await talkerFS.writeTalkerFile(newTalker);
    res.status(201).json({ ...talkerWithId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', tokenValidation, talkerValidation, async (req, res) => {
  const { id } = req.params;
  const updatedTalker = req.body;
  try {
    await talkerFS.removeTalkerById(id);
    const talkerWithId = await talkerFS.writeTalkerFile({
      ...updatedTalker,
      id,
    });
    res.status(200).json({ ...talkerWithId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/', async (req, res) => {
  try {
    await talkerFS.whiteOutTalkerFile();
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', tokenValidation, async (req, res) => {
  const { id } = req.params;
  try {
    await talkerFS.removeTalkerById(+id);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.status(204).json({});
});

module.exports = router;
