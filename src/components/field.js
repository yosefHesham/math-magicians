/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
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
    const { sign, handleClick } = this.props;
    const fieldClassNames = `field ${arithmeticSigns.includes(sign) ? 'orange' : ' '} `;

    return (
      <div className={fieldClassNames} id={`field${sign}`} onClick={() => handleClick(sign)} onKeyDown={() => null} role="button" tabIndex={0}>
        {sign}
      </div>
    );
  }
}

export default Field;
