const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const numeroAnimais = {};
  species.forEach((a) => {
    numeroAnimais[a.name] = a.residents.length;
  });

  if (animal === undefined) return numeroAnimais;
  if (animal.sex === undefined) return numeroAnimais[animal.specie];

  const retornaAnimal = species.find((animals) => animals.name === animal.specie);
  const confereSexo = retornaAnimal.residents.filter((sexo) => sexo.sex === animal.sex);

  return confereSexo.length;
}

module.exports = countAnimals;
// a de animal
