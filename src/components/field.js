/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import React from 'react';

const arithmeticSigns = [
  '+',
  '-',
  '÷',
  '=',
  'x',
];

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { sign } = this.props;
    const fieldClassNames = `field ${arithmeticSigns.includes(sign) ? 'orange' : ' '} `;

    return (
      <div className={fieldClassNames} id={`field${sign}`}>
        {sign}
      </div>
    );
  }
}

export default Field;
