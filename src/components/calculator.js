import React from 'react';
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
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  calculateResult = (sign) => {
    const result = calculate(this.state, sign);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">

        <ResultField result={`${total || ''}${operation || ''}${next || ''}`} />
        {calc.map((sign) => <Field key={sign} handleClick={this.calculateResult} sign={sign} />)}

      </div>
    );
  }
}

export default Calculator;
