const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function confereFunc({ name, id }) {
  const func = employees.find((e) => e.id === id || e.firstName === name || e.lastName === name);
  // confere se o parametro corresponde aos dados dos funcionarios
  if (func === undefined) throw Error('Informações inválidas'); // lança um erro se não corresponder

  const animais = species.filter((e) => func.responsibleFor.includes(e.id));
  // verifica se o funcionario é responsavel pelo animal
  return {
    id: func.id,
    fullName: `${func.firstName} ${func.lastName}`,
    species: animais.map((especie) => especie.name),
    locations: animais.map((especie) => especie.location),
  };
}

function retornaTodos() {
  return employees.map((employee) => confereFunc({ id: employee.id }));
}

function getEmployeesCoverage(objeto) {
  if (objeto === undefined) return retornaTodos();
  return confereFunc(objeto);
}

module.exports = getEmployeesCoverage;
