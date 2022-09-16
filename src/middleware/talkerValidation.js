const watchedAtValidation = (talker) => {
  if (!talker.talk.watchedAt) return 'O campo "watchedAt" é obrigatório';
  if (!/\d\d\/\d\d\/\d\d\d\d/.test(talker.talk.watchedAt)) {
    return 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';
  }
};

const rateValidation = (talker) => {
  if (!talker.talk.rate && talker.talk.rate !== 0) return 'O campo "rate" é obrigatório';
  if (talker.talk.rate < 1 || talker.talk.rate > 5) {
    return 'O campo "rate" deve ser um inteiro de 1 à 5';
  }
  return watchedAtValidation(talker);
};

const talkValidation = (talker) => {
  if (!talker.talk) return 'O campo "talk" é obrigatório';
  return rateValidation(talker);
};

const ageValidation = (talker) => {
  if (!talker.age) return 'O campo "age" é obrigatório';
  if (talker.age < 18) return 'A pessoa palestrante deve ser maior de idade';
  return talkValidation(talker);
};

const nameValidation = (talker) => {
  if (!talker.name) return 'O campo "name" é obrigatório';
  if (talker.name.length < 3) return 'O "name" deve ter pelo menos 3 caracteres';
  return ageValidation(talker);
};

const talkerValidation = (req, res, next) => {
  const newTalker = req.body;
  const message = nameValidation(newTalker);
  if (message) return res.status(400).json({ message });
  next();
};

module.exports = talkerValidation;
