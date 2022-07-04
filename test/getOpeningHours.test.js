const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Testa se quando passado a função sem parâmetro, o valor retornado são todos os horários de abertura e fechamento', () => {
    const resultado = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(resultado);
  });
  test('Testa se quando passado a função com parametro onde o zoologico está aberto, o valor retornado é The zoo is open', () => {
    expect(getOpeningHours('Saturday', '08:25-AM')).toEqual('The zoo is open');
  });
  test('Testa se quando passado a função com parametro onde o zoologico está aberto, o valor retornado é The zoo is open', () => {
    expect(getOpeningHours('Thursday', '04:25-PM')).toEqual('The zoo is open');
  });
  test('Testa se quando passado a função com parametro onde o zoologico está fechado, o valor retornado é The zoo is closed', () => {
    expect(getOpeningHours('Thursday', '09:25-PM')).toEqual('The zoo is closed');
  });
  // test('Testa se quando passado a função com parametro de data errada, o valor retornado é um erro', () => {
  //   expect(getOpeningHours('Thursday', '08:65-PM')).toThrow('The minutes must be between 0 and 59');
  // });
});
