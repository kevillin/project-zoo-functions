const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const idsRecebidos = ids.map((id) => species.find((specie) => specie.id === id));
  return idsRecebidos;
}

module.exports = getSpeciesByIds;
// Requisito feito;
