const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((funcionario) => funcionario.managers.includes(id));
}

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  if (isManager(managerId) === true) {
    const confereGerente = employees.filter((e) => e.managers.some((i) => i === managerId));
    const finalGerente = confereGerente
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    return finalGerente;
  }
}

module.exports = { isManager, getRelatedEmployees };
