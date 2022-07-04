const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const idade = species.every((a) => a.name === animal && a.residents.age >= age);
  return idade;
}

module.exports = getAnimalsOlderThan;
// falta terminar. Está dando erro.
// variavel 'a' de animal
