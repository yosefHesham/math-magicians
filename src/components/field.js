import React from 'react';
import PropTypes from 'prop-types';

const arithmeticSigns = [
  '+',
  '-',
  '÷',
  '=',
  'x',
];

const Field = (props) => {
  const { sign, handleClick } = props;
  const fieldClassNames = `field ${arithmeticSigns.includes(sign) ? 'orange' : ' '} `;

  return (
    <div className={fieldClassNames} id={`field${sign}`} onClick={() => handleClick(sign)} onKeyDown={() => null} role="button" tabIndex={0}>
      {sign}
    </div>
  );
};

Field.propTypes = {
  sign: PropTypes.string,
  handleClick: PropTypes.func,
};
Field.defaultProps = {
  sign: '',
  handleClick: () => {},
};

export default Field;
