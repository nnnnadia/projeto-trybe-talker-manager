const fs = require('fs').promises;
const { join } = require('path');

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

const removeTalkerById = async (id) => {
  try {
    const talkerFile = await readTalkerFile();
    const newTalkerFile = talkerFile.filter((talker) => talker.id !== id);
    await fs.writeFile(join(__dirname, '../talker.json'), JSON.stringify(newTalkerFile));
  } catch (err) {
    throw new Error(err.message);
  }
};

const generateId = (talkerFile) => talkerFile[talkerFile.length - 1].id + 1;

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
  readTalkerFile,
  getTalkerById,
  writeTalkerFile,
  removeTalkerById,
};
