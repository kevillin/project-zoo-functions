const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((func) => func.id === id);
  const animalResponsavel = funcionario.responsibleFor[0];
  const animal = species.find((e) => e.id === animalResponsavel);

  const achaAnimal = animal.residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  const resultado = Object.values(achaAnimal);

  return resultado;
}

module.exports = getOldestFromFirstSpecies;
