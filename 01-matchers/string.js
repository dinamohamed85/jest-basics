// REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
const reverseString = str =>
  str
    .toLowerCase()
    .split('')
    .reverse()
    .join('');

module.exports = reverseString;