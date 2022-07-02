const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return animal.filter((animalAge) => animalAge.age >= age && animalAge.specie);
  // falta terminar. Está dando erro.
}

module.exports = getAnimalsOlderThan;
