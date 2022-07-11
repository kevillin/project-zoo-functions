const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const adultos = entrants.filter((a) => a.age >= 10 && a.age < 50).length;
  const idosos = entrants.filter((i) => i.age >= 50).length;
  const criancas = entrants.filter((c) => c.age < 18).length;

  const visitantes = { adult: adultos, senior: idosos, child: criancas };
  return visitantes;
}

function calculateEntry(entrants) {
  if (!(entrants) || Object.values(entrants).length === 0) {
    return 0;
  }

  const cV = countEntrants(entrants);
  // calculaVisitantes
  const precoTotalCalculado = ((cV.adult * prices
    .adult) + (cV.senior * prices.senior) + (cV.child * prices.child));
  return precoTotalCalculado;
}
// console.log(countEntrants({ adult: 2, child: 3, senior: 1 }));

module.exports = { calculateEntry, countEntrants };
