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

module.exports = {
  readTalkerFile,
  getTalkerById,
};
