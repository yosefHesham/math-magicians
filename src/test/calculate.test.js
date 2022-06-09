import calculate from '../logic/calculate';

describe('Test for  calculate function', () => {
  test('Test AC button', () => {
  // arrange
    const obj = {
      next: null,
      total: 5,
      operation: '+',
    };

    // act

    const result = calculate(obj, 'AC');

    // assert
    expect(result).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('It should clear if next and button is 0', () => {
  // arrange
    const obj = {
      next: '0',
      total: null,
      operation: null,
    };

    // act
    const result = calculate(obj, '0');
    expect(result).toStrictEqual({});
  });

  test('Next should be concatenated with the number', () => {
  // arrange
    const obj = {
      next: '5',
      operation: '+',
      total: '0',
    };

    // act
    const result = calculate(obj, '5');

    // asert

    expect(result).toStrictEqual({
      ...obj,
      next: `${obj.next}5`,
    });
  });

  test('Next should be updated with the number', () => {
  // arrange
    const obj = {
      next: '0',
      operation: '+',
      total: '10',
    };

    // act
    const result = calculate(obj, '5');

    // asert
    expect(result).toStrictEqual({
      ...obj,
      next: '5',
    });
  });

  test('Update next without operation', () => {
  // arrange
    const obj = {
      next: '5',
      operation: null,
      total: '5',
    };

    // act
    const result = calculate(obj, '5');

    // asert
    expect(result).toStrictEqual({
      total: null,
      next: '55',
    });
  });

  test('It should set next  without operation and clear the total', () => {
  // arrange
    const obj = {
      next: '0',
      operation: null,
      total: '5',
    };

    // act
    const result = calculate(obj, '5');

    // asert
    expect(result).toStrictEqual({
      total: null,
      next: '5',
    });
  });
});
