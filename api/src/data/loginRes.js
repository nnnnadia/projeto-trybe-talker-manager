const crypto = require('crypto');

const generateToken = () => {
  const token = crypto.generateKeySync('hmac', { length: 64 });
  return token.export().toString('hex');
};

module.exports = { generateToken };
