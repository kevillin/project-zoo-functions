const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testa se quando passado o parâmetro count, o valor retornado é 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Testa se quando passado o parâmetro names, o nome de todos os elefantes é retornado em forma de array', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('Testa se quando passado o parâmetro count, o valor retornado é 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Testa se quando passado o parâmetro averageAge, o valor retornado é 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
});
