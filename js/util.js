function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

export {generateRandomIndex, generateRandomNumber}
