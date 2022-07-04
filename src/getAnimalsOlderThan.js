const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const idade = species.find((a) => a.name === animal).residents.every((e) => e.age >= age);
  return idade;
}

module.exports = getAnimalsOlderThan;
// variavel 'e' de elemento
// variavel 'a' de animal
