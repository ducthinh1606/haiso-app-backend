const bcrypt = require('bcrypt');
const { Bcrypt } = require('./enums')

/**
 * Hash a string using bcrypt.
 * @param {string} string - The string to be hashed.
 * @returns {Promise<string>} - A promise that resolves to the hashed string.
 */
const hash = async (string) => {
  return await bcrypt.hash(string, Bcrypt.SALT);
};

module.exports = {
  hash,
};
