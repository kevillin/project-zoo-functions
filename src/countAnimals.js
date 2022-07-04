const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  return species.filter((e) => animal.specie === e.specie || animal.sex === e.residents.sex);
}

module.exports = countAnimals;
// está dando erro
