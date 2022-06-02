import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Field from './field';
import ResultField from './result_field';

const calc = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

const Calculator = () => {
  const [result, setResult] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  const calculateResult = (sign) => {
    const res = calculate(result, sign);
    setResult(res);
  };
  const { total, operation, next } = result;
  return (
    <div className="calculator">

      <ResultField result={`${total ?? ''}${operation ?? ''}${next ?? ''}`} />
      {calc.map((sign) => <Field key={sign} handleClick={calculateResult} sign={sign} />)}

    </div>
  );
};
export default Calculator;
