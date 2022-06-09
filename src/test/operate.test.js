import Big from 'big.js';
import operate from '../logic/operate';

const [n1, n2] = [Big(10), Big(15)];

describe('Test for arithmetic operations', () => {
  test('Testing unkown operation', () => {
    expect(() => operate(n1, n2, 's')).toThrow(Error);
  });

  test('Test dividing by 0', () => {
    expect(operate(n1, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('Test module by 0', () => {
    expect(operate(n1, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('Testing addition operation', () => {
    expect(operate(n1, n2, '+')).toEqual('25');
  });

  test('Testing minus operation', () => {
    expect(operate(n1, n2, '-')).toEqual('-5');
  });

  test('Testing dividing operation', () => {
    expect(operate(n1, n2, '÷')).toEqual(n1.div(n2).toString());
  });

  test('Testing multiplication operation', () => {
    expect(operate(n1, n2, 'x')).toEqual('150');
  });
});
