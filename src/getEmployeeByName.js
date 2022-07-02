const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const result = employees.find((e) => employeeName === e.firstName || employeeName === e.lastName);
  if (result === undefined) return {};
  return result;
}

module.exports = getEmployeeByName;
// o e(employee) significa o item dentro do array
// Requisito Feito
