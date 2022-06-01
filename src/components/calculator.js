/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import React from 'react';
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
      result: '0',
    };
  }

  displayNumber = (number) => {
    if (number === 'AC') {
      this.setState({ result: '0' });
    } else {
      this.setState((previousState) => ({
        result: previousState.result + number,
      }));
    }
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calculator">

        <ResultField result={result} />
        {calc.map((sign) => <Field key={sign} handleClick={this.displayNumber} sign={sign} />)}

      </div>
    );
  }
}

export default Calculator;
