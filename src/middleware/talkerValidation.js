const nameValidation = (req, res, next) => {
  const newTalker = req.body;
  if (!newTalker.name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (newTalker.name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const ageValidation = (req, res, next) => {
  const newTalker = req.body;
  if (!newTalker.age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (newTalker.age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const talkValidation = (req, res, next) => {
  const newTalker = req.body;
  if (!newTalker.talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

const watchedAtValidation = (req, res, next) => {
  const newTalker = req.body;
  if (!newTalker.talk.watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!/\d\d\/\d\d\/\d\d\d\d/.test(newTalker.talk.watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const rateValidation = (req, res, next) => {
  const newTalker = req.body;
  if (!newTalker.talk.rate) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  if (newTalker.talk.rate < 1 || newTalker.talk.rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};

module.exports = {
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
};
