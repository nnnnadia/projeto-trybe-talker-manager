const fs = require('fs').promises;
const { join } = require('path');

const whiteOutTalkerFile = async () => {
  try {
    await fs.writeFile(join(__dirname, '../talker.json'), JSON.stringify([]));
  } catch (err) {
    throw new Error(err.message);
  }
}

const restartTalkerFile = async () => {
  try {
    const initialTalkers = await fs.readFile(join(__dirname, '../initialTalkers.json'));
    await fs.writeFile(join(__dirname, '../talker.json'), initialTalkers);
  } catch (err) {
    throw new Error(err.message);
  }
};

const readTalkerFile = async () => {
  try {
    const rawFile = await fs.readFile(join(__dirname, '../talker.json'));
    return JSON.parse(rawFile);
  } catch (err) {
    throw new Error(err.message);
  }
};

const getTalkerById = async (id) => {
  const talkerFile = await readTalkerFile();
  return talkerFile.find((talker) => talker.id === +id);
};

const getTalkerByQuery = async (query) => {
  try {
    const talkerFile = await readTalkerFile();
    return talkerFile.filter((talker) => talker.name.includes(query));
  } catch (err) {
    throw new Error(err.message);
  }
};

const removeTalkerById = async (id) => {
  try {
    const talkerFile = await readTalkerFile();
    const newTalkerFile = talkerFile.filter((talker) => talker.id !== id);
    await fs.writeFile(join(__dirname, '../talker.json'), JSON.stringify(newTalkerFile));
  } catch (err) {
    throw new Error(err.message);
  }
};

const generateId = (talkerFile) => {
  try {
    return talkerFile[talkerFile.length - 1].id + 1;
  } catch (err) {
    return 1;
  }
};

const writeTalkerFile = async (talker) => {
  try {
    const talkerFile = await readTalkerFile();
    const id = !talker.id ? generateId(talkerFile) : talker.id;
    const talkerWithId = { ...talker, id: +id };
    talkerFile.push(talkerWithId);
    await fs.writeFile(join(__dirname, '../talker.json'), JSON.stringify(talkerFile));
    return talkerWithId;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  whiteOutTalkerFile,
  restartTalkerFile,
  readTalkerFile,
  getTalkerById,
  writeTalkerFile,
  removeTalkerById,
  getTalkerByQuery,
};
